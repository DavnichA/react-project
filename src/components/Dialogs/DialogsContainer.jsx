import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {

    let state = props.store.getState().dialogsPage;

    function onSendMessageClick() {
        props.store.dispatch(sendMessageActionCreator());
    }
    function writeMessage(text) {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    } 

    return (
        <Dialogs 
        updateNewMessageText = {writeMessage}
        sendMessage = {onSendMessageClick}
        dialogsPage = {state}/>
    );
}

export default DialogsContainer; 