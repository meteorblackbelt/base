import React from 'react';
import { browserHistory } from 'react-router';
import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Signup from '../components/Signup.js';

const style = {
  height: 'auto',
  width: '400 px',
  padding: 20,
  display: 'inline-block',
};

const SignupPage = () => (
  <Col xs={12} md={4} mdOffset={4}>
    <Paper style={style} zDepth={1}>
      <Signup displayLogin={() => (browserHistory.push('/login'))}/>
    </Paper>
  </Col>
);

export default SignupPage;
