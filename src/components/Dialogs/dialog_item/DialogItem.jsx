import React from 'react';
import item from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={item.dialog}>  
            <NavLink to={path}><img src={props.img} alt="avatar"/> {props.name}</NavLink>
        </div>
    );
}


export default DialogItem; 