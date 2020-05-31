import React from 'react';
import myPost from './MyPost.module.css';
import Post from './Post/Post';

function MyPost(props) {

    let postElement = props.postData.map((post) => {
        return (
            <Post message={post.message} like={post.likescount} />
        )
    });

    return (
        <div className={myPost.my_posts}>
            <h3>My posts</h3>
            <div>
                <textarea className={myPost.write_text}></textarea>
                <button className={myPost.btn}>Add post</button>
            </div>
            <div className={myPost.new_post}>
                {postElement}
            </div>

        </div>
    );
}

export default MyPost;