/* eslint-disable max-len */

import React from 'react';
import Formsy from 'formsy-react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { FormsyText } from 'formsy-material-ui/lib';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      canSubmit: false,
    };
  }

  handleSubmitLogin() {
    handleLogin({ component: this });
  }

  handleRecPassword() {
    browserHistory.push('/recover-password');
    this.props.handleClose();
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  render() {
    const errorMessages = {
      emailError: 'Is this email address legit?',
      passwordError: 'Please provide at least 6 characters.',
    };
    return (
      <Col className="Login">
        <h4 className="page-header">Sign in</h4>
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInvalid={this.disableButton.bind(this)}
          onValidSubmit={this.handleSubmitLogin.bind(this)}
        >
          <FormsyText
            type="email"
            name="emailAddress"
            ref="emailAddress"
            validations="isEmail"
            validationError={errorMessages.emailError}
            required
            hintText="Enter a valid email address"
            floatingLabelText="Email Address"
          /><br/>
          <FormsyText
            type="password"
            name="password"
            ref="password"
            validations={{ minLength: 6 }}
            validationError={errorMessages.passwordError}
            hintText="6 characters minimum"
            floatingLabelText="Password"
          /><br/><br/>
          <RaisedButton
            type="submit"
            label="Login"
            primary={true}
            disabled={!this.state.canSubmit}
          />
        </Formsy.Form><br/>
      <p>No account? <FlatButton primary={true} label="Sign Up" onTouchTap={() => (this.props.displayLogin(false))}/></p>
      <p>Forgot password? <FlatButton label="Reset Password" primary={true} onTouchTap={this.handleRecPassword.bind(this)}/></p>
      </Col>
    );
  }
}

Login.propTypes = {
  displayLogin: React.PropTypes.func.isRequired,
  handleClose: React.PropTypes.func,
};
