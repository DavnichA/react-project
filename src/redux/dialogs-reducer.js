const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

function dialogsReducer(state, action) {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage
      return state;

    case SEND_MESSAGE:
      let message = state.newMessageText;
      let newMessage = {
        id: 4,
        message: message
      }
      state.newMessageText = '';
      state.messagesData.push(newMessage);
      return state;

    default:
      return state;
  }
}

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}
export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
  }
}

export default dialogsReducer;