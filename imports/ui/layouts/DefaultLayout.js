import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import BaseLayout from './BaseLayout.js';
import AppNavigation from '../containers/AppNavigation.js';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => (
  <BaseLayout>
    <AppNavigation />
    <div style={{ marginTop: '40px', marginBottom: '40px' }}>
      { children }
    </div>
  </BaseLayout>
);

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
