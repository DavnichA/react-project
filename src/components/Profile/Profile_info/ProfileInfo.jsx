import React from 'react';
import Profile_Info from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div className={Profile_Info.profile}>
            <div className={Profile_Info.head_img}></div>
            <div className={Profile_Info.client}>
                <div className={Profile_Info.avatar}>ava</div>
                <div className={Profile_Info.description}>discription</div>
            </div>
        </div>

    );
}

export default ProfileInfo;