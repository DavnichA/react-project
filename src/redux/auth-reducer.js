const FOLLOW = 'FOLLOW';


// state по умолчанию
let initialState = {
  

};

function authReducer(state = initialState, action) {
  switch (action.type) {

   
    
    default:
      return state;
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId });


export default authReducer;

// ...state это глубокое копирование обьекта