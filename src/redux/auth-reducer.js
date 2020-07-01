import { authAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';


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
        ...action.data,
        isAuth: true
      }

    default:
      return state;
  }
}

//action
export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

//thunk
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then(response => {
      if (response.data.resultCode === 0) {
        let { Id, email, login } = response.data.data;
        dispatch(setUserData(Id, email, login));
      }
    });
  }
}
export default authReducer;

// ...state это глубокое копирование обьекта
