/* eslint-disable max-len */

import React from 'react';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';
import PropTypes from 'prop-types';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation user={hasUser} /> : <PublicNavigation />);

const AppNavigation = ({ hasUser }) => (
  <div>
    { renderNavigation(hasUser) }
  </div>
);

AppNavigation.propTypes = {
  hasUser: PropTypes.object,
};

export default AppNavigation;
