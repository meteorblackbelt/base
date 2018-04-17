/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';

const translateUserData = (data, user) => (
  {
    'emails.0.address': data.emailAddress,
    'profile.position': data.position
	}
);

const updateProfile = (data) => {
  let user = Meteor.user();
  const userData = translateUserData(data, user);
  console.log('updating')
  console.log(userData)

  Meteor.users.update(
    { _id: user._id },
    { $set: userData },
    (error) => {
      if (error) {
        console.log(error)
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
          title: `Profile saved`,
          icon: 'fa-smile-o',
          hideDelay: 5000,
        });
      }
    }
  );
};

export default function handleUpdate(data) {
  updateProfile(data);
}
