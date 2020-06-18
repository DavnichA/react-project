import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';


// react-redux
let mapStateToProps= (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost:  () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        } 
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;