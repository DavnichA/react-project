import React from 'react';
import user from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/avatar.jpg';


class Users extends React.Component{
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items) //данные которые вернулись с сервера: а именно пользователи
            });
    }

    render(){
        return (
            <main>
                <h1 className={user.headline}>Users</h1>
                <div className={user.user_wrapper}>
                    {this.props.users.map(u => <div className={user.user_block} key={u.id + Math.random()}>
                        <div className={user.ava_img}>
                            <div className={user.user_photo_wrapper}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" className={user.user_photo} />
                            </div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }} className={user.btn_flw}>Follow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>}
                        </div>
                        <div className={user.discription}>
                            <div className={user.name_status}>
                                <h4>{u.name}</h4>
                                <p>{u.status}</p>
                            </div>
                            <div className={user.location}>
                                <p>Country: {'u.location.country'}</p>
                                <p>City: {'u.location.city'}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </main>
        );
    }
}

export default Users;