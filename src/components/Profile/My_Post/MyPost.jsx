import React from 'react';
import myPost from './MyPost.module.css';
import Post from './Post/Post';

function MyPost() {
    return (
        <div className={myPost.my_posts}>
            <h3>My posts</h3>
            <div className={myPost.new_post}></div>
            <Post />
        </div>
    );
}

export default MyPost;