import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, currentPage, setTotalUsersCount, setIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import Preloader from '../Preloader';

class UsersAPI extends React.Component {
    // монтируем данные с сервера
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items) //данные которые вернулись с сервера: а именно пользователи
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
    // по клику на цифры в списке нумерации страниц со значением страницы перелистываем
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items) //данные которые вернулись с сервера: а именно пользователи
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
                onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
    follow, unfollow, setUsers, currentPage, setTotalUsersCount, setIsFetching
})(UsersAPI);

export default UsersContainer;