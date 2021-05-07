import React from 'react';
import Home from 'pages/home/Home';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from 'pages/profile/Profile';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
