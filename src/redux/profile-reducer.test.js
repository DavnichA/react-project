import profileReducer, { addPostActionCreator } from "./profile-reducer";

it ('length of posts incremented', () => {

  // 1. test data
  let action = addPostActionCreator('this text add in action');
  let state = {
    postData: [
      { id: 1, message: "Hi, how are u?", likescount: 18 },
      { id: 2, message: "Nice.What about you?", likescount: 30 }]
  };

  // 2. action
  let newState = profileReducer (state, action);

  // 3. expectation
  expect(newState.postData.length).toBe(3);
});