import { authAPI, securityAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'my-app/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'my-app/auth/GET_CAPTCHA_URL_SUCCESS';


// state по умолчанию
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captcha: null
};


function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }


    default:
      return state;
  }
}
//action
export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: 
  { userId, email, login, isAuth } });

export const getCaptchaUrlSuccess = (captcha) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captcha} });

//thunk
export const getAuthUserData = () => async(dispatch) => {
    let response = await authAPI.me();

      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
      }
}

export const login = (email, password, rememberMe, captcha) => async(dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha);

      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
      else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl());
        }
        dispatch(stopSubmit('login', {_error: response.data.messages}));
      }
  }

export const logout = () =>  async(dispatch) => {

   let response = await authAPI.logout();
   
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
  }

export const getCaptchaUrl = () => async(dispatch) => {
  let response = await securityAPI.getCaptcha();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;

// ...state это глубокое копирование обьекта
