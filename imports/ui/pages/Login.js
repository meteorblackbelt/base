import React from 'react';
import { browserHistory } from 'react-router';
import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Login from '../components/Login.js';
import PropTypes from 'prop-types';

export default class LoginPage extends React.Component {
  nextPathname() {
    if (this.props.location.state && this.props.location.state.nextPathname) {
      return this.props.location.state.nextPathname;
    }
    return null;
  }

  render() {
    const style = {
      height: 'auto',
      padding: 20,
      display: 'block',
    };
    return (
      <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
        <Paper style={style} zDepth={1}>
          <Login
            nextPathname={this.nextPathname()}
            handleClose={() => (0)}
            displayLogin={() => (browserHistory.push('/signup'))}
          />
        </Paper>
      </Col>
    );
  }
}

LoginPage.propTypes = {
  'location.state.nextPathname': PropTypes.string,
  'location.state.': PropTypes.object,
  location: PropTypes.object,
};
