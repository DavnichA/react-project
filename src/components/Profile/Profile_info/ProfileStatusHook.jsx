import React, { useState, useEffect  } from 'react';
import p from './ProfileInfo.module.css';



let ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);
    
    // клик по параграфу
    const activateEditMode = () => {
        setEditMode(true);
        setStatus(props.status);
    };

    // убрать фокус с input
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    // побуквенное изминение статуса flax
    const onStatusChange = (st) => {
        setStatus(st.currentTarget.value);
    }

    return (
        <div className={p.aboutMe}>
            {!editMode
                ? <div>
                    <b>Status: </b> <span onClick={activateEditMode}>{props.status || '---'}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} 
                           onBlur={deactivateEditMode} type="text" value={status} />
                </div>
            }
        </div>

    )
}


export default ProfileStatusHook;