import React from 'react';
import myPost from './MyPost.module.css';
import Post from './Post/Post';

function MyPost() {
    return (
        <div className={myPost.my_posts}>
            <h3>My posts</h3>
            <div className={myPost.new_post}></div>
            <Post message='Hi, how are u?' like='&#10084; 18'/>
            <Post message='Nice.What about you?' like='&#10084; 30'/>
        </div>
    );
}

export default MyPost;