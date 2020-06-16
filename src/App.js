import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <Nav />
        <div className="wrap-content">
          <Route path="/profile" render={() => <Profile
            store={props.store} />}
          />
          <Route path="/dialogs" render={() => <DialogsContainer
            store={props.store} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
