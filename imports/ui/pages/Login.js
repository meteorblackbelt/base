import React from 'react';
import Login from '../components/Login.js';

class LoginPage extends React.Component {
  render() {
    return (
      <Login id="LoginPage" className={this.props.className} />
    );
  }
}

export default LoginPage;
