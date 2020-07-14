import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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

    default:
      return state;
  }
}

//action
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

// thunk
//получить пользователя
export const getUsersProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data)) //данные которые вернулись с сервера: а именно пользователи
    });
  }
}

//получить статус
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data))
    });
  }
}

//обновить статус
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    });
  }
}

export default profileReducer;