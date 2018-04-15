import React from 'react';
import { browserHistory } from 'react-router';
import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 'auto',
  width: '400 px',
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Index = () => (
  <Col style={{ textAlign: 'center' }} xs={12} md={4} mdOffset={4}>
    <Paper style={style} zDepth={1}>
      <h2>Welcome</h2>
      <p>A starting point for Meteor applications.</p>
    </Paper>
  </Col>
);

export default Index;
