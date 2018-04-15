/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from '../../ui/layouts/App.js';
import Auth from '../../ui/layouts/Auth.js';
import LoginPage from '../../ui/pages/Login.js';
import SignupPage from '../../ui/pages/Signup.js';
import Index from '../../ui/pages/Index.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';

var _colors = require('material-ui/styles/colors');

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

const theme = getMuiTheme({
  palette: {
    textColor: "rgba(36, 59, 107, 1)",
    primaryColor: "rgba(74, 144, 226, 1)",
  },
  appBar: {
    color: _colors.white,
    textColor: "rgba(36, 59, 107, 1)",
    showMenuIconButton: true,
  },
  flatButton: {
    textColor: "rgba(74, 144, 226, 1)",
  }
});

Meteor.startup(() => {
  render(
    <MuiThemeProvider muiTheme={theme}>
      <Router history={ browserHistory }>
        <Route path="/">
          <Route component={ Auth }>
            <Route name="login" path="/login" component={ LoginPage } />
            <Route name="signup" path="/signup" component={ SignupPage } />
            <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
            <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
          </Route>
          <Route component={ App }>
            <IndexRoute name="index" component={ Index } />
            <Route path="*" component={ NotFound } />
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>,
    document.getElementById('react-root')
  );
});
