import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './dialog_message/Message';

function Dialogs(props) {
    // structure message block
    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} img={dialog.img} id={dialog.id} key={dialog.id + Math.random()}/>
        )
    });

    let messagesElements = state.messagesData.map((message) => {
        return (
            <Message message={message.message} key={message.id + Math.random()}/>
        )
    });
    // send new message

    let newMessage = state.newMessageText;

    function onSendMessageClick() {
        props.sendMessage();
    }

    function writeMessage(event) {
        let text = event.target.value;
        props.updateNewMessageText(text);
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