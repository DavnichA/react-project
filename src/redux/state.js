let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are u?", likescount: 18 },
        { id: 2, message: "Nice.What about you?", likescount: 30 }
      ],
      newPostText: ''
    },

    dialogsPage: {
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
      ]
    }
  },

  _callSubscriber() {
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likescount: 0
      }
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }

}


export default store;