import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

// описание  хранилища для разных разделов
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

// создать store и отдать все редюсеры и state
let store = createStore(reducers);



export default store;