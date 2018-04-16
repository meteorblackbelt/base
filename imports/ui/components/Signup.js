/* eslint-disable max-len */

import React from 'react';
import Formsy from 'formsy-react-2';
import { Link } from 'react-router';
import { Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { FormsyText } from 'formsy-mui';
import handleSignup from '../../modules/signup';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      <Col id={this.props.id} className={classNames(this.props.className, "Signup")}>
        <h3 className="page-header">Sign Up</h3>
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInvalid={this.disableButton.bind(this)}
          onValidSubmit={this.handleSubmit.bind(this)}
        >
          <FormsyText
            type="text"
            ref="firstName"
            name="firstName"
            fullWidth={true}
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
            fullWidth={true}
            floatingLabelText="Last Name"
            hintText="Enter your last name"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
          />
          <FormsyText
            type="email"
            name="emailAddress"
            fullWidth={true}
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
            fullWidth={true}
            ref="password"
            validations={{ minLength: 6 }}
            validationError={errorMessages.passwordError}
            hintText="6 characters minimum"
            floatingLabelText="Password"
          />
          <div className="form-actions">
            <RaisedButton
              type="submit"
              label="Sign up"
              primary={true}
              disabled={!this.state.canSubmit}
            />
          </div>
        </Formsy.Form>
        <footer>
          Already have an account? 
          {" "}
          <Link to="/login">Log in</Link>
        </footer>
      </Col>
    );
  }
}
