import React from 'react';
import user from './Users.module.css';
import Paginator from './Paginator';
import User from './User';

let Users = (props) => {

    return (
        <main>
            <h1 className={user.headline}>Users</h1>
            <div className={user.user_wrapper}>
                {props.users.map(u => <User key={u.id + Math.random()}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           unfollowProgress={props.unfollowProgress}
                                           followProgress={props.followProgress}/>
                )}
            </div>

            {/* нумерация страниц */}
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        </main>
    )
}


export default Users;