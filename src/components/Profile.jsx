import React from 'react';

function Profile() {
    return (
        <main>
            <div className="head-main-img"></div>
            <div className="client">
                <div className="avatar"></div>
                <div className="description"></div>
            </div>
            <div className="my-posts">
                <h3>My posts</h3>
                <div className="new-post"></div>
                <div className="post"></div>
            </div>
        </main>
    );
}

export default Profile;