import React from 'react';
import MyPostContainer from './My_Post/MyPostContainer';
import ProfileInfo from './Profile_info/ProfileInfo';

function Profile(props) {
    return (
        <main>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile} />
            <MyPostContainer />
        </main>
    );
}

export default Profile;