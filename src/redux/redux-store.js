import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

// соеденить редюсеры и создание state с profilePage, dialogsPage по аналогии с store
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

// создать store и отдать все редюсеры и state
let store = createStore(reducers);



export default store;