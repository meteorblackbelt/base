import React from 'react';
import { browserHistory } from 'react-router';
import Formsy from 'formsy-react-2';
import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { FormsyText } from 'formsy-mui';
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
      padding: 20,
      display: 'block',
    };
    return (
      <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
        <Paper className="RecoverPassword" style={style} zDepth={0}>
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
              fullWidth={true}
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
          <p>Remember your password? <FlatButton primary={true} label="Log In" onClick={() => (browserHistory.push('/login'))}/></p>
        </Paper>
      </Col>
    );
  }
}
