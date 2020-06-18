import React from 'react';
import myPost from './MyPost.module.css';
import Post from './Post/Post';

function MyPost(props) {

    let postElement = props.postData.map((post) => {
        return (
            <Post message={post.message} like={post.likescount} key={post.id + Math.random()}/>
        )
    });

    let newPostElement = React.createRef();

    // add post
    function addPost() {
        props.addPost();
    }

    // change post
    function onPostChange(){
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={myPost.my_posts}>
            <h3>My posts</h3>
            <div>
                <textarea 
                    className={myPost.write_text} 
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}/>
                <button className={myPost.btn} onClick={addPost}>Add post</button>
            </div>
            <div className={myPost.new_post}>
                {postElement}
            </div>

        </div>
    );
}

export default MyPost;