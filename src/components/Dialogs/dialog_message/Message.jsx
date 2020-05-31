import React from 'react';
import dialogs from './Message.module.css';

function Message(props) {
    return (
        <div className={dialogs.message}>{props.message}</div>
    );
}
export default Message; 