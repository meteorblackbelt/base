/* eslint-disable max-len */

import React from 'react';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

export default class AppNavigation extends React.Component {
  render() {
    return (Meteor.user() ? <AuthenticatedNavigation user={Meteor.user()} /> : <PublicNavigation />);
  }
}
