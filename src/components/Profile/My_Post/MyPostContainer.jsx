import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost'

function MyPostContainer(props) {
    let state = props.store.getState();

    // add post
    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }
    // change post
    function onPostChange(text) {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPost
            updateNewPostText={onPostChange}
            addPost={addPost} 
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText} />
    );
}

export default MyPostContainer;