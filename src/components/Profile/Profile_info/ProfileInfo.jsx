import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from '../../Preloader';
import userPhoto from '../../../img/avatar.jpg'
//import ProfileStatus from './ProfileStatus';
import ProfileStatusHook from './ProfileStatusHook';


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={p.profile}>
            <div className={p.client}>
                <div className={p.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="im" />
                </div>
                <div className={p.description}>
                    <div className={p.profileFullName}>
                        <h3>{props.profile.fullName}</h3>
                    </div>
                    
                    <ProfileStatusHook
                        status = {props.status}
                        updateStatus = {props.updateStatus}/>
                   
                    <div className={p.social}></div>
                </div>
                <div className={p.work}>
                    <div className={p.work}></div>
                </div>
            </div>
        </div>

    );
}

export default ProfileInfo;