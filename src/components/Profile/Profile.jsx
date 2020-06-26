import React from 'react';
import MyPostContainer from './My_Post/MyPostContainer';
import ProfileInfo from './Profile_info/ProfileInfo';

function Profile(props) {
    return (
        <main>  
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </main>
    );
}

export default Profile;