import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
    follow, unfollow, setUsers, setcurrentPage,
    setTotalUsersCount, setIsFetching, toggleFollowing
} from '../../redux/users-reducer';
import Preloader from '../Preloader';
import { usersAPI } from '../../API/api';

class UsersAPIContainer extends React.Component {
    // монтируем данные с сервера
    componentDidMount() {
        this.props.setIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items) //данные которые вернулись с сервера: а именно пользователи
            this.props.setTotalUsersCount(data.totalCount)
        });
    }
    // по клику на цифры в списке нумерации страниц со значением страницы перелистываем
    onPageChanged = (pageNumber) => {
        this.props.setcurrentPage(pageNumber);
        this.props.setIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items) //данные которые вернулись с сервера: а именно пользователи
        });
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                toggleFollowing={this.props.toggleFollowing}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(currentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAction(totalCount));
        },
        setIsFetching: (isFetching) => { 
            dispatch(setIsFetchingAction(isFetching));
        }
    }
}*/

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setcurrentPage,
    setTotalUsersCount, setIsFetching, toggleFollowing
})(UsersAPIContainer);

export default UsersContainer;