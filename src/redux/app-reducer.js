import { getAuthUserData } from "./auth-reducer";

const SET_INITIAL = 'my-app/app/SET_INITIAL';

let initialState = {
  initial: false
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL:
      return {
        ...state,
        initial: true
      }
    default:
      return state;
  }
}

// action

export const setInitial = () => ({ type: SET_INITIAL });

//thunk

export const initialApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]) //для массива промисов 
    .then(() => {
      dispatch(setInitial());
    });
}

export default appReducer;