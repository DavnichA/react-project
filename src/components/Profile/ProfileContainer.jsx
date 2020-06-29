import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';


class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data) //данные которые вернулись с сервера: а именно пользователи
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlData = withRouter(ProfileAPI)

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(WithUrlData);
export default ProfileContainer;