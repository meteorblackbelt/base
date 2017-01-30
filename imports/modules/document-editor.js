/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertDocument } from '../api/documents/methods.js';

let component;

const handleUpsert = () => {
  const date = new Date();
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Document updated!' : 'Document added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
    date: String(date),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertDocument.call(upsert, (error, response) => {
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
        title: confirmation,
        icon: 'fa-check-circle',
        hideDelay: 5000,
      });
      browserHistory.push(`/documents/${response.insertedId || doc._id}`);
    }
  });
};

export default function documentEditor(options) {
  component = options.component;
  handleUpsert();
}
