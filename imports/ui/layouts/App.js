/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DefaultLayout from '../../ui/layouts/DefaultLayout.js';
import AuthLayout from '../../ui/layouts/AuthLayout.js';
import LoginPage from '../../ui/pages/Login.js';
import SignupPage from '../../ui/pages/Signup.js';
import Profile from '../../ui/pages/Profile.js';
import Index from '../../ui/pages/Index.js';
import JobsPage from '../../ui/pages/Jobs.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import { withTracker } from 'meteor/react-meteor-data';
import getUserName from '../../modules/get-user-name';
import _colors from 'material-ui/styles/colors';
import JobPage from '../../ui/pages/Job.js';
import WalletPage from '../../ui/pages/Wallet.js';

import Data from '../../ui/pages/data/Menu.js';
import DataJobs from '../../ui/pages/data/Jobs.js';

const theme = getMuiTheme({
  borderRadius: "3px",
  palette: {
    textColor: "rgba(36, 59, 107, 1)",
    primary1Color: "rgba(74, 144, 226, 1)",
  },
  appBar: {
    color: _colors.white,
    textColor: "rgba(36, 59, 107, 1)",
    showMenuIconButton: true,
  },
  button: {
    textTransform: 'none',
  },
  raisedButton: {
    secondaryColor: "rgba(73, 85, 102, 1)",
    borderRadius: '10px',
  }
});

class App extends React.Component {
  authenticate(nextState, replace) {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  }

  render() {
    const { props, state, setAfterLoginPath } = this;
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router history={ browserHistory }>
          <Route path="/">
            <Route component={ AuthLayout }>
              <Route name="login" path="/login" component={ LoginPage } />
              <Route name="signup" path="/signup" component={ SignupPage } />
              <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
              <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
              <Route name="profile" path="/profile" component={ Profile } />
            </Route>
            <Route component={ DefaultLayout } onEnter={ this.authenticate }>
              <IndexRoute name="index" component={ Index } />
              <Route name="job" path="/jobs/:id" component={ JobPage } />
              <Route name="jobs" path="/jobs" component={ JobsPage } />
              <Route name="wallet" path="/wallet" component={ WalletPage } />

              <Route name="data" path="/data" component={ Data } />
              <Route name="data_jobs" path="/data/jobs" component={ DataJobs } />
              <Route path="*" component={ NotFound } />
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    )
  }
}

App.defaultProps = {
  userId: '',
  emailAddress: '',
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  emailAddress: PropTypes.string,
  emailVerified: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  const userId = Meteor.userId();
  const loading = !Roles.subscription.ready();
  const name = user && user.profile && user.profile.name && getUserName(user.profile.name);
  const emailAddress = user && user.emails && user.emails[0].address;

  return {
    loading,
    loggingIn,
    authenticated: !loggingIn && !!userId,
    name: name || emailAddress,
    roles: !loading && Roles.getRolesForUser(userId),
    userId,
    emailAddress,
    emailVerified: user && user.emails ? user && user.emails && user.emails[0].verified : true,
  };
})(App);
