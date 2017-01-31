import React from 'react';
import Formsy from 'formsy-react';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';
import handleRecoverPassword from '../../modules/recover-password';

export default class RecoverPassword extends React.Component {
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
    handleRecoverPassword();
  }

  render() {
    const errorMessages = {
      emailError: 'Is this email address legit?',
    };
    const style = {
      height: 'auto',
      width: '400 px',
      padding: 20,
      display: 'inline-block',
    };
    return (
      <Col xs={12} md={4} mdOffset={4}>
        <Paper className="RecoverPassword" style={style} zDepth={1}>
          <h4 className="page-header">Recover Password</h4>
          <p>
            Enter your email address below to receive a link to reset your password.
          </p>
          <Formsy.Form
            onValid={this.enableButton.bind(this)}
            onInvalid={this.disableButton.bind(this)}
            onValidSubmit={this.handleSubmit}
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
