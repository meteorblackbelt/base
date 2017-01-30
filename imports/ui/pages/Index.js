import React from 'react';
import { browserHistory } from 'react-router';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
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
      <h2>Base & Material UI</h2>
      <p>A starting point for Meteor applications.</p>
      <p><a target="_blank" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.11.0</p>
      <RaisedButton onTouchTap={() => (browserHistory.push('/documents'))} primary={true} label="Start"/>
    </Paper>
  </Col>
);

export default Index;
