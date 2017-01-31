/* eslint-disable no-undef */

import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';

export default function handleRecoverPassword() {
  Accounts.forgotPassword({
    email: document.querySelector('[name="emailAddress"]').value,
  }, (error) => {
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
        title: 'Check your inbox for a reset link!',
        icon: 'fa-check-circle',
        hideDelay: 5000,
      });
    }
  });
}
