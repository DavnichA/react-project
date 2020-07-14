import React from 'react';
import myPost from './MyPost.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

function MyPost(props) {

    let postElement = props.postData.map((post) => {
        return (
            <Post message={post.message} like={post.likescount} key={post.id + Math.random()} />
        )
    });


    // add post
    function addPost(value) {
        props.addPost(value.newPostText);
    }


    return (
        <div className={myPost.my_posts}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost} />
            <div className={myPost.new_post}>
                {postElement}
            </div>

        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPostText' />
            <button className={myPost.btn}> Add post </button>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPost;