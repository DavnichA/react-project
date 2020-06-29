import React from 'react';
import user from './Users.module.css';
import userPhoto from '../../img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { usersAPI} from '../../API/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <main>
        <h1 className={user.headline}>Users</h1>
        <div className={user.user_wrapper}>
            {props.users.map(u => <div className={user.user_block} key={u.id + Math.random()}>
                <div className={user.ava_img}>
                    <div className={user.user_photo_wrapper}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" className={user.user_photo} />
                        </NavLink>
                    </div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                            props.toggleFollowing(true, u.id);
                            usersAPI.unfollowUsers(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id);
                                }
                                props.toggleFollowing(false, u.id);
                            });
                        }} className={user.btn_flw}>Follow</button>

                        : <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                            props.toggleFollowing(true, u.id);
                            usersAPI.followUsers(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id);
                                }
                                props.toggleFollowing(false, u.id);
                            });
                        }}>Unfollow</button>}
                </div>
                <div className={user.discription}>
                    <div className={user.name_status}>
                        <h4>{u.name}</h4>
                        <p>{u.status}</p>
                    </div>
                    <div className={user.location}>
                        <p>Country: {'Ukraine'}</p>
                        <p>City: {'Kiev'}</p>
                    </div>
                </div>
            </div>
            )}
        </div>

        {/* нумерация страниц */}
        <div className={user.page}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? user.selectedPage : null}
                    onClick={() => { props.onPageChanged(p) }} key={p + Math.random()}>{p}</span>
            })}
        </div>
    </main>
}


export default Users;