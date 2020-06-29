import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import {setUserData} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {
               if (response.data.resultCode === 0) {
                   let {Id, email, login} = response.data.data;
                   this.props.setUserData(Id, email, login); 
               }
            });
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}



export default connect(mapStateToProps, {setUserData })(HeaderContainer);