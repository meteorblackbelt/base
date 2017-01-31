/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

let component;

const login = () => {
  const email = document.querySelector('[name="emailAddress"]').value;
  const password = document.querySelector('[name="password"]').value;

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      Bert.alert({
        type: 'danger',
        style: 'growl-bottom-right',
        title: error.reason,
        icon: 'fa-warning',
        hideDelay: 5000,
      });
    } else {
      Bert.alert({
        type: 'success',
        style: 'growl-bottom-right',
        title: 'Welcome!',
        icon: 'fa-check-circle',
        hideDelay: 5000,
      });

      const location = component.props;
      if (location.nextPathname) {
        browserHistory.push(location.nextPathname);
      } else {
        browserHistory.push('/');
      }
    }
  });
};

export default function handleLogin(options) {
  component = options.component;
  login();
}
