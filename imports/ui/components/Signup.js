/* eslint-disable max-len */

import React from 'react';
import Formsy from 'formsy-react';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { FormsyText } from 'formsy-material-ui/lib';
import handleSignup from '../../modules/signup';
import PropTypes from 'prop-types';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      canSubmit: false,
    };
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

  handleSubmit() {
    handleSignup({ component: this });
  }

  render() {
    const errorMessages = {
      wordsError: 'Please only use letters',
      emailError: 'Is this email address legit?',
      passwordError: 'Please provide at least 6 characters.',
    };
    return (
      <Col className="Signup">
        <h4 className="page-header">Sign Up</h4>
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInvalid={this.disableButton.bind(this)}
          onValidSubmit={this.handleSubmit.bind(this)}
        >
          <FormsyText
            type="text"
            ref="firstName"
            name="firstName"
            floatingLabelText="First Name"
            hintText="Enter your first name"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
          /><br/>
          <FormsyText
            type="text"
            ref="lastName"
            name="lastName"
            floatingLabelText="Last Name"
            hintText="Enter your last name"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
          /><br/>
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
            label="Sign up"
            primary={true}
            disabled={!this.state.canSubmit}
          />
        </Formsy.Form><br/>
        <p>Already have an account? <FlatButton primary={true} label="Log In" onTouchTap={() => (this.props.displayLogin(true))}/></p>
      </Col>
    );
  }
}

Signup.propTypes = {
  displayLogin: PropTypes.func.isRequired,
};
