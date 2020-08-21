import { profileAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'my-app/profile/ADD-POST';
const SET_USER_PROFILE = 'my-app/profile/SET_USER_PROFILE';
const SET_STATUS = 'my-app/profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'my-app/profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'my-app/profile/SAVE_PROFILE_SUCCESS';

// state по умолчанию
let initialState = {
  postData: [
    { id: 1, message: "Hi, how are u?", likescount: 18 },
    { id: 2, message: "Nice.What about you?", likescount: 30 }
  ],
  profile: null,
  status: ''
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likescount: 0
      };
      return {
        ...state,
        newPostText: '',
        postData: [...state.postData, newPost]
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photo: action.photo}
      }
    

    default:
      return state;
  }
}

//action
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO_SUCCESS, photo});
export const saveProfileSuccess = (profile) => ({type: SAVE_PROFILE_SUCCESS, profile})

// thunk
//получить пользователя
export const getUsersProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data)) //данные которые вернулись с сервера: а именно пользователи
}

//получить статус
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data))
}

//обновить статус
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

//сохранить фото
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
//сохранить данные профиля
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId =  getState().auth.userId;
  const response = await profileAPI.savePofile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUsersProfile(userId));
  } else {
    dispatch(stopSubmit('profileForms', {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;