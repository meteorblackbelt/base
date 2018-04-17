/* eslint-disable max-len */

import React from 'react';
import Formsy from 'formsy-react-2';
import { browserHistory, Link } from 'react-router';
import { Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-mui';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Jobs from '../../../api/jobs/jobs';

export default class Jpbs extends React.Component {
  handleSubmit(data) {
    data.createdAt
    Jobs.insert(data, (error) => {
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
					title: `Saved`,
					hideDelay: 5000,
				});
			}
		});
  }

  render() {
    return (
      <div className="Jobs">
        <header>
					<Link className="back" onClick={browserHistory.goBack}>Back</Link>
          <h3 className="page-header">New Job</h3>
        </header>
        <Formsy.Form
          onValidSubmit={this.handleSubmit.bind(this)}>
          <FormsyText
            type="text"
            name="company"
            fullWidth={true}
            floatingLabelText="Company"
            required
          />
          <FormsyText
            type="text"
            name="title"
            fullWidth={true}
            floatingLabelText="Title"
            required
          />
          <FormsyText
            type="text"
            name="description"
            fullWidth={true}
            floatingLabelText="Description"
            required
          />
          <div className="form-actions">
            <RaisedButton
              type="submit"
              label="Create"
              primary={true}
            />
          </div>
        </Formsy.Form>
      </div>
    );
  }
}
