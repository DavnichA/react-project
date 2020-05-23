import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="wrap">
      <Header />
      <Nav />
      <div className="wrap-content">
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
