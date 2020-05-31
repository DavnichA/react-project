import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './dialog_message/Message'

function Dialogs(props) {

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

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.users_dialogs}>
                {dialogsElement}
            </div>
            <div className={dialogs.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs; 