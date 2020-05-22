import React from 'react';
import main from './Profile.module.css';
import MyPost from './My_Post/MyPost';

function Profile() {
    return (
        <main>
            <div className={main.head_img}></div>
            <div className={main.client}>
                <div className={main.avatar}></div>
                <div className={main.description}></div>
            </div>
            <MyPost />
        </main>
    );
}

export default Profile;