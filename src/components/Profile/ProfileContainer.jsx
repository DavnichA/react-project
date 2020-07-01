import React from 'react';
import { connect } from 'react-redux';
import { getUsersProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { authRedirect } from '../../hoc/AuthRedirect';


class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUsersProfile(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

//hoc
let RedirectComponent = authRedirect(ProfileAPI);



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlData = withRouter(RedirectComponent)

const ProfileContainer = connect(mapStateToProps, { getUsersProfile })(WithUrlData);
export default ProfileContainer;