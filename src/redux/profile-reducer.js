const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// state по умолчанию
let initialState =  {
  postData: [
    { id: 1, message: "Hi, how are u?", likescount: 18 },
    { id: 2, message: "Nice.What about you?", likescount: 30 }
  ],
  newPostText: ''
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likescount: 0
      }
      state.postData.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
      type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
  }
}

export default profileReducer;