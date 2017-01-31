/* eslint-disable max-len */

import React from 'react';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation user={hasUser} /> : <PublicNavigation />);

const AppNavigation = ({ hasUser }) => (
  <div>
    { renderNavigation(hasUser) }
  </div>
);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigation;
