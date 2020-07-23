import React from 'react';
import lg from './Login.module.css';
import chk from './Checkbox.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={lg.inpt_wrap}>
                <div className={lg.inptgroup}>
                    <Field type={"text"} component={'input'} name={'email'} required={'required'} />
                    <label>Email</label>
                    <div className={lg.bar}></div>
                </div>
            </div>

            <div className={lg.inpt_wrap}>
                <div className={lg.inptgroup}>
                    <Field type={"password"} component={'input'} name={'password'} required={'required'} />
                    <label>Password</label>
                    <div className={lg.bar}></div>
                </div>
            </div>

            <div className={`${chk.checkbox} ${chk.coloured}`}>
                <label>
                    <Field type={"checkbox"} component={'input'} name={'rememberMe'} />
                    <span className={chk.checkbox_material}>
                        <span className={chk.check}></span>
                    </span> Remember me
                </label>
            </div>
            
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