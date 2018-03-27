import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
//import Button from './components/Button';
import NavMenu from './components/ListBar';
import Loging from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Redirect from="/" to="/login" />
        <Route path="/login" component={Loging} />

        {/* <NavMenu /> */}
      </div>
    );
  }
}

export default App;
