import React from 'react';
import { connect } from 'react-redux';
import { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
//import { authRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileAPI extends React.Component {

    //метод обновления данных
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    // обновить данные при первой загрузке
    componentDidMount() {
        this.refreshProfile();
    }
    
    //обновить данные при изменении данных (статус, фото)
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile {...this.props}
                isOwner = {!this.props.match.params.userId}
                profile = {this.props.profile}
                status = {this.props.status}
                updateStatus = {this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

//hoc

//before compose
/*let RedirectComponent = authRedirect(ProfileAPI);

let WithUrlData = withRouter(RedirectComponent)

const ProfileContainer = connect(mapStateToProps, { getUsersProfile })(WithUrlData);
*/

export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter
    //authRedirect
)(ProfileAPI);