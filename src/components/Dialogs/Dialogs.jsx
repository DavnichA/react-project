import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './dialog_message/Message';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'

function Dialogs(props) {
    // structure message block

    let dialogsElement = props.state.dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} img={dialog.img} id={dialog.id} />
        )
    });

    let messagesElements = props.state.messagesData.map((message) => {
        return (
            <Message message={message.message} />
        )
    });
    // send new message

    let newMessage = props.state.newMessageText;
    function onSendMessageClick() {
        props.dispatch(sendMessageActionCreator());
    }
    function writeMessage(event) {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }


    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.users_dialogs}>
                {dialogsElement}
            </div>
            <div className={dialogs.messages}>
                {messagesElements}
                <div className={dialogs.inputMessage}>
                    <textarea 
                        value={newMessage} 
                        onChange={writeMessage}
                        placeholder='Write a message...'></textarea>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs; 