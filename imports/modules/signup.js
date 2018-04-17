/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';

const translateUserData = (data) => ({
  email: data.emailAddress,
  password: data.password,
  profile: {
    name: data.name
  },
});

const signup = (data) => {
  const user = translateUserData(data);

  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert({
        type: 'danger',
        style: 'growl-bottom-right',
        title: error.reason,
        icon: 'fa-warning',
        hideDelay: 5000,
      });
    } else {
      browserHistory.push('/');
      Bert.alert({
        type: 'success',
        style: 'growl-bottom-right',
        title: `Nice to meet you ${user.profile.name.first}!`,
        icon: 'fa-smile-o',
        hideDelay: 5000,
      });
    }
  });
};

export default function handleSignup(data) {
  signup(data);
}
