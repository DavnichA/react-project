import React from 'react';
import { connect } from 'react-redux';
import { getUsersProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
//import { authRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId =  8895;
        }
        this.props.getUsersProfile(userId);
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

//hoc




//before compose
/*let RedirectComponent = authRedirect(ProfileAPI);

let WithUrlData = withRouter(RedirectComponent)

const ProfileContainer = connect(mapStateToProps, { getUsersProfile })(WithUrlData);
*/

export default compose(
    connect(mapStateToProps, { getUsersProfile }),
    withRouter
    //authRedirect
)(ProfileAPI);