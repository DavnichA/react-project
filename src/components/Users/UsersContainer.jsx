import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
     getUsers, pageChanged,
    followProgress, unfollowProgress
} from '../../redux/users-reducer';
import Preloader from '../Preloader';
import { compose } from 'redux';
import { authRedirect } from '../../hoc/AuthRedirect';
import { getUsersSelect, getPageSizeSelect, getTotalUsersCountSelect,
         getCurrentPageSelect, getFollowingInProgressSelect, getIsFetchingSelect,
         getPortionSizeSelect } from '../../redux/selectors/users-selectors';

class UsersAPIContainer extends React.Component {
    // монтируем данные с сервера
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    // по клику на цифры в списке нумерации страниц со значением страницы перелистываем
    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.pageChanged(pageNumber, pageSize);
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                followProgress={this.props.followProgress}
                unfollowProgress={this.props.unfollowProgress} 
                portionSize={this.props.portionSize}/>
        </>
    }
}
    /* before selectors */
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

   /* after selectors */
let mapStateToProps = (state) => {
    return {
        users: getUsersSelect(state),
        pageSize: getPageSizeSelect(state),
        totalUsersCount: getTotalUsersCountSelect(state),
        currentPage: getCurrentPageSelect(state),
        isFetching: getIsFetchingSelect(state),
        followingInProgress: getFollowingInProgressSelect(state),
        portionSize: getPortionSizeSelect(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        getUsers: (currentPage, pageSize) => {
            dispatch(getUsers(currentPage, pageSize))
        },
        pageChanged: (pageNumber, pageSize) => {
            dispatch(pageChanged(pageNumber, pageSize))
        },
        followProgress: (userId) => {
            dispatch(followProgress(userId))
        },
        unfollowProgress: (userId) => {
            dispatch(unfollowProgress(userId))
        }
    }
}

//const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);


export default compose(
    authRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersAPIContainer);