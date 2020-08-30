import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialApp } from './redux/app-reducer';
import Preloader from './components/Preloader';
import { Suspense } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //ленивая загрузка

class App extends React.Component {
  componentDidMount() {
    this.props.initialApp();
  }
  render() {
    if (!this.props.initial) {
      return <Preloader />
    }
    else {
      return (
        <div className="wrap">

          <HeaderContainer />
          <Nav />
          <div className="wrap-content">
            {/* Switch ожидает совпадения точ в точ */}
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/profile'}/>} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/dialogs" render={() => {
                return <Suspense fallback={<div>Загрузка...</div>}> <DialogsContainer /> </Suspense>
              }} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="*" render={() => <div style={{color: '#fff'}}> 404 NOT FOUND </div>} />
            </Switch>
          </div>

        </div>
      );
    }
  }

}

const mapStateToProps = (state) => {
  return {
    initial: state.app.initial
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initialApp }))(App);
