import React from 'react';
import post from './Post.module.css';

function Post() {
    return (
        <div className={post.item}>
            <img src="https://i.pinimg.com/originals/19/43/18/19431859261e12c5ba63da8f57b776ee.jpg" alt="avatar" />
            <span>text</span>
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;