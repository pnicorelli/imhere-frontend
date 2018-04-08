import React from 'react';

import {  Route, Switch, Redirect } from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';
import './layout.css';
import NoMatch from '../pages/NoMatch';
import HomePage from '../pages/HomePage';
import CheckInPage from '../pages/CheckInPage';
import WhoPage from '../pages/WhoPage';
import ReportsPage from '../pages/ReportsPage';
import LogoutPage from '../pages/LogoutPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ApiWrapper from '../Utils/ApiWrapper';
import Storage from '../Utils/Storage';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return <div id="content">

      <Header />

      <Route exact path="/signup/:token"  component={SignUp} />
      <Route exact path="/login"  component={Login} />
      <Route exact path="/" exact component={HomePage} />
      <Route exact path="/checkin" exact component={CheckInPage} />
      <Route exact path="/who" exact component={WhoPage} />
      <Route exact path="/reports" exact component={ReportsPage} />
      <Route exact path="/logout" exact component={LogoutPage} />

      <Footer />
    </div>;

  }
};

export default Main;
