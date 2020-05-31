import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <Nav />
        <div className="wrap-content">
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
