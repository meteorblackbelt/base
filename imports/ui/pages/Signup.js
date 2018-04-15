import React from 'react';
import Signup from '../components/Signup.js';

class SignupPage extends React.Component {
  render() {
    return (
      <Signup id="SignupPage" className={this.props.className} />
    );
  }
}

export default SignupPage;
