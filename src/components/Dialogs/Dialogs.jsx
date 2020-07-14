import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './dialog_message/Message';
import { Field, reduxForm } from 'redux-form';

function Dialogs(props) {
    
    // structure message block
    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} img={dialog.img} id={dialog.id} key={dialog.id + Math.random()} />
        )
    });

    let messagesElements = state.messagesData.map((message) => {
        return (
            <Message message={message.message} key={message.id + Math.random()} />
        )
    });

    // send new message

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessage);
    }

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.users_dialogs}>
                {dialogsElement}
            </div>
            <div className={dialogs.messages}>
                {messagesElements} 
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={dialogs.inputMessage}>
                <Field component='textarea' name='newMessage' placeholder='Write a message...'/>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form:  "AddMessageForm "})(AddMessageForm);

export default Dialogs; 