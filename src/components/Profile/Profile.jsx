import React from 'react';
import main from './Profile.module.css';
import MyPostContainer from './My_Post/MyPostContainer';
import ProfileInfo from './Profile_info/ProfileInfo';

function Profile(props) {
    return (
        <main>  
            <ProfileInfo />
            <MyPostContainer store={props.store}/>
        </main>
    );
}

export default Profile;