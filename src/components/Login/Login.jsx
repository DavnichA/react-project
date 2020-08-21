import React from 'react';
import lg from './Login.module.css';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { inputField, chekboxForm } from '../FormsControls';

const LoginForm = (props) => {
    return (
        
        <form onSubmit={props.handleSubmit}>

            {/* input text email & pass */}
            {inputField('Email', 'email', 'text', lg)}
            {inputField('Password', 'password', 'password', lg)}
                
            {/* ckeckbox */}
            {chekboxForm('login_check', 'Remember Me')}
            
            {/* errors alert */}
            {props.error && <div className={lg.form_error}>{props.error}</div>}
            
            <div className={lg.lg_btn_wrap}>
                <button className={lg.lg_btn}>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile '} />
    }

    return (
        <div className={lg.login_wrap}>
            <h2 className={lg.heading}>Sign In</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { login })(Login); 