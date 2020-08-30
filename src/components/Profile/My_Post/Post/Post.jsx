import React from 'react';
import post from './Post.module.css';

function Post(props) {
    return (
        <div className={post.item}>
            <div className={post.wrap_image_post}>
                <div className={post.img}></div>
                <span>{props.message}</span>
            </div>
            <div className={post.likes}>
                <span>&#10084;{props.like}</span>
            </div>
        </div>
    );
}

export default Post;