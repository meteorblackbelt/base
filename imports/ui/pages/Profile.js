import React from 'react';
import Formsy from 'formsy-react-2';
import { FormsyText } from 'formsy-mui';
import { withTracker } from 'meteor/react-meteor-data';
import { browserHistory, Link } from 'react-router';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import PersonIcon from 'material-ui/svg-icons/social/person';
import HardwareKeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import handleUpdate from '../../modules/profile';
import autoBind from 'auto-bind';
import 'fa-stylus';
import "./Profile.styl";


class Profile extends React.Component {
  constructor() {
    super();
		autoBind(this);
    this.state = {
      editEnabled: false,
      canSubmit: false,
      name: null,
    }
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

  toggleEdit() {
    this.setState({
      editEnabled: !this.state.editEnabled,
    })
  }

  handleSubmit(data) {
		handleUpdate(data);
    this.toggleEdit();
  }

  handleLogout() {
    Meteor.logout(() => browserHistory.push('/login'));
  }

  render() {
    const errorMessages = {
      emailError: 'Is this email address valid?',
      passwordError: 'Please provide at least 6 characters.',
      invalidError: 'This field is invalid.',
    };

    return (
        <Formsy.Form
          id="ProfilePage"
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onValidSubmit={this.handleSubmit}
        >
          <div className="profile-main">
            <Link className="back" onClick={browserHistory.goBack}><HardwareKeyboardBackspace style={{ width: 30, height: 30 }} color="#fff"/></Link>

            <div className="profile-pic">
              <a action="edit" className="fa fa-pencil" onClick={this.toggleEdit}>
                Edit
              </a>
              {
                this.props.profilePic
                ? <img src={this.props.profilePic} />
                : <PersonIcon color="rgba(73, 85, 102, 1)" style={{ width: 100, height: 100 }} />
              }
            </div>
            <h2 className="name">{this.props.name}</h2>
            <h3 className="position">{this.props.position}</h3>
          </div>
          <div className="profile-details">
            <FormsyText
              type="email"
              name="emailAddress"
              value={this.props.email}
              disabled={!this.state.editEnabled}
              fullWidth={true}
              ref="emailAddress"
              validations="isEmail"
              validationError={errorMessages.emailError}
              required
              hintText="Enter a valid email address"
              floatingLabelText="Email Address"
            />
            <FormsyText
              type="password"
              name="password"
              value="********"
              disabled={!this.state.editEnabled}
              fullWidth={true}
              ref="password"
              validations={{ minLength: 6 }}
              validationError={errorMessages.passwordError}
              hintText="6 characters minimum"
              floatingLabelText="Password"
            />
            <FormsyText
              type="text"
              name="position"
              value={this.props.position}
              disabled={!this.state.editEnabled}
              fullWidth={true}
              ref="position"
              validations="isWords"
              validationError={errorMessages.invalidError}
              hintText="Enter your current possition"
              floatingLabelText="Position"
            />
						{ this.state.editEnabled && (
							<div className="form-actions">
								<RaisedButton
									type="submit"
									label="Save"
									primary={true}
									disabled={!this.state.canSubmit}
								/>
							</div>
						)}
          </div>
          <div className="page-actions">
            <FlatButton label="Logout" onClick={this.handleLogout} />
          </div>
        </Formsy.Form>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
};

export default withTracker(({ id }) => {
  let name, email, position;
  let user = Meteor.user();

  if (user && user.profile) {
    email = user.emails[0].address;

    if (user.profile) {
      name = user.profile.name;
      position = user.profile.position;
    }
  }

  return {
    user: user,
    name: name,
    email: email,
    position: position,
    profilePic: '/profile.jpg',
    profilePic: null,
  }
})(Profile);
