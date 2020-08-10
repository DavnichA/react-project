import React from 'react';
import userst from './Users.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../img/avatar.jpg';

let User = (props) => {
    return (
        <div className={userst.user_block}>
            <div className={userst.ava_img}>
                <div className={userst.user_photo_wrapper}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt="avatar" className={userst.user_photo} />
                    </NavLink>
                </div>
                {props.user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => { props.unfollowProgress(props.user.id) }}
                        className={userst.btn_flw}>
                        Follow</button>

                    : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => { props.followProgress(props.user.id) }}>
                        Unfollow</button>}
            </div>
            <div className={userst.discription}>
                <div className={userst.name_status}>
                    <h4>{props.user.name}</h4>
                    <p>{props.user.status}</p>
                </div>
                <div className={userst.location}>
                    <p>Country: {'Ukraine'}</p>
                    <p>City: {'Kiev'}</p>
                </div>
            </div>
        </div>
    )
}

export default User;