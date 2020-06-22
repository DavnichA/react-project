const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

// state по умолчанию
let initialState = {
  dialogsData: [
    { id: 1, name: "Oleg", img: "https://i.lb.ua/047/48/5d9efcc739d04.jpeg" },
    { id: 2, name: "Vova", img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Pan_Tadeusz_-_Ksiega_6_2.JPG" },
    { id: 3, name: "Inna", img: "https://i.sozcu.com.tr/wp-content/uploads/2017/12/inna-4.jpg" },
    { id: 4, name: "Sveta", img: "https://yaustal.com/uploads/posts/2019-01/1546964062_sveta-biljalova-na-foto-iz-instagram-6.jpg" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Nice" },
    { id: 3, message: "What nice" },
  ],
  newMessageText: ''
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state, //копируем обьект state 
        newMessageText: action.newMessage
      };

    case SEND_MESSAGE:
      let message = state.newMessageText;
      let newMessage = {
        id: 4,
        message: message
      };

      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, newMessage]
      };

    default:
      return state;
  }
}

// disptch несет в себе тип и переданные данные для обновления состояния
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

// reducers — это функции, для обработки отправленных действий.