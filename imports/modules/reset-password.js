/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';

let token;

const handleReset = () => {
  const password = document.querySelector('[name="newPassword"]').value;
  Accounts.resetPassword(token, password, (error) => {
    if (error) {
      Bert.alert({
        type: 'danger',
        style: 'growl-bottom-right',
        title: error.reason,
        icon: 'fa-warning',
        hideDelay: 5000,
      });
      if (error.reason === 'Token expired') {
        browserHistory.push('/recover-password');
      }
    } else {
      browserHistory.push('/');
      Bert.alert({
        type: 'success',
        style: 'growl-bottom-right',
        title: 'Password reset!',
        icon: 'fa-check-circle',
        hideDelay: 5000,
      });
    }
  });
};

export default function handleResetPassword(options) {
  token = options.token;
  handleReset();
}
