import React from 'react';
import { browserHistory } from 'react-router';
import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Signup from '../components/Signup.js';

const style = {
  padding: 20,
  display: 'block',
};

const SignupPage = () => (
  <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
    <Paper style={style} zDepth={1}>
      <Signup displayLogin={() => (browserHistory.push('/login'))}/>
    </Paper>
  </Col>
);

export default SignupPage;
