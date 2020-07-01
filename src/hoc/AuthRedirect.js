import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const authRedirect = (Component) => {
  let RedirectComponent = (props) => {
    if (props.isAuth === false) return <Redirect to={'/login'} /> // если не залогинен, перенаправить на страницу логина
    return <Component {...props} />
  }

  let ConnectRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

  return ConnectRedirectComponent
}
