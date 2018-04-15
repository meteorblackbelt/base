import React from 'react';
import Formsy from 'formsy-react-2';
import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import { FormsyText } from 'formsy-mui';
import RaisedButton from 'material-ui/RaisedButton';
import handleResetPassword from '../../modules/reset-password';
import PropTypes from 'prop-types';

export default class ResetPassword extends React.Component {
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
    handleResetPassword({ token: this.props.params.token });
  }

  render() {
    const errorMessages = {
      minlengthError: 'Please provide at least 6 characters.',
      matchError: 'Password don\'t match.',
    };
    const style = {
      height: 'auto',
      padding: 20,
      display: 'block',
    };
    return (
      <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
        <Paper className="ResetPassword" style={style} zDepth={0}>
          <h4 className="page-header">Reset Password</h4>
          <p>
            To reset your password, enter a new one below. You will be logged in
            with your new password.
          </p>
          <Formsy.Form
            onValid={this.enableButton.bind(this)}
            onInvalid={this.disableButton.bind(this)}
            onValidSubmit={this.handleSubmit.bind(this)}
          >
            <FormsyText
              type="password"
              ref="newPassword"
              name="newPassword"
              fullWidth={true}
              floatingLabelText="New password"
              hintText="6 characters minimum"
              validations={{ minLength: 6 }}
              validationError={errorMessages.minlengthError}
              required
            /><br/>
            <FormsyText
              type="password"
              ref="repeatNewPassword"
              name="repeatNewPassword"
              fullWidth={true}
              floatingLabelText="Repeat New Password"
              hintText="Repeat New Password"
              validations="equalsField:newPassword"
              validationError={errorMessages.matchError}
              required
            /><br/><br/>
            <RaisedButton
              type="submit"
              label="Submit"
              primary={true}
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </Col>
    );
  }
}

ResetPassword.propTypes = {
  params: PropTypes.object,
};
