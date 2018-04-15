import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

const Auth = ({ children }) => (
  <div>
    <Grid style={{ marginTop: '40px', marginBottom: '40px' }} fluid>
      <Row>
        { children }
      </Row>
    </Grid>
  </div>
);

Auth.propTypes = {
  children: PropTypes.node,
};

export default Auth;
