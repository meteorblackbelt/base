import React from 'react';
import { Grid, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import AppNavigation from '../containers/AppNavigation.js';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <div>
    <AppNavigation />
    <Grid style={{ marginTop: '40px', marginBottom: '40px' }} fluid>
      <Row>
        { children }
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
