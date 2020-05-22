import React from 'react';
import main from './css/Profile.module.css';

function Profile() {
    return (
        <main>
            <div className={main.head_img}></div>
            <div className={main.client}>
                <div className={main.avatar}></div>
                <div className={main.description}></div>
            </div>
            <div className={main.my_posts}>
                <h3>My posts</h3>
                <div className={main.new_post}></div>
                <div className={main.post}></div>
            </div>
        </main>
    );
}

export default Profile;