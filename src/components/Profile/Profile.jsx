import React from 'react';
import main from './Profile.module.css';
import MyPost from './My_Post/MyPost';
import ProfileInfo from './Profile_info/ProfileInfo';

function Profile(props) {
   
    return (
        <main>  
            <ProfileInfo />
            <MyPost postData={props.state.postData}/>
        </main>
    );
}

export default Profile;