import React from 'react';
import Formsy from 'formsy-react-2';
import { browserHistory, Link } from 'react-router';
import { Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { FormsyText } from 'formsy-mui';
import handleRecoverPassword from '../../modules/recover-password';
import classNames from 'classnames';

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
      emailError: 'Is this email address valid?',
    };
    const style = {
      height: 'auto',
      padding: 20,
      display: 'block',
    };
    return (
      <Col id="RecoverPasswordPage" className={classNames(this.props.className, "RecoverPassword")}>
        <header>
          <Link className="back" onClick={browserHistory.goBack}>Back</Link>
          <h3 className="page-header">Recover Password</h3>
        </header>
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
          />
          <div className="form-actions">
            <RaisedButton
              type="submit"
              label="Submit"
              primary={true}
              disabled={!this.state.canSubmit}
            />
          </div>
        </Formsy.Form>
        <footer>
          Remember your password?
          {" "}
          <Link to="/login">Log in</Link>
        </footer>
      </Col>
    );
  }
}
