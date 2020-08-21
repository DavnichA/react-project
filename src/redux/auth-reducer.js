import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'my-app/auth/SET_USER_DATA';


// state по умолчанию
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false

};


function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
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

//thunk
export const getAuthUserData = () => async(dispatch) => {
    let response = await authAPI.me();

      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
      }
}

export const login = (email, password, rememberMe) => async(dispatch) => {

    let response = await authAPI.login(email, password, rememberMe);

      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
      else {
        dispatch(stopSubmit('login', {_error: response.data.messages}));
      }
  }

export const logout = () =>  async(dispatch) => {

   let response = await authAPI.logout();
   
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
  }

export default authReducer;

// ...state это глубокое копирование обьекта
