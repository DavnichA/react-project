import React from 'react';
import { connect } from 'react-redux';
import { getUsersProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
//import { authRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8895;
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

//hoc




//before compose
/*let RedirectComponent = authRedirect(ProfileAPI);

let WithUrlData = withRouter(RedirectComponent)

const ProfileContainer = connect(mapStateToProps, { getUsersProfile })(WithUrlData);
*/

export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
    withRouter
    //authRedirect
)(ProfileAPI);