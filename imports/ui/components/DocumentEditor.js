/* eslint-disable max-len, no-return-assign */

import React from 'react';
import Formsy from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';
import documentEditor from '../../modules/document-editor.js';
import PropTypes from 'prop-types';

export default class DocumentEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      canSubmit: false,
    };
  }

  handleSubmit() {
    documentEditor({ component: this });
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

  render() {
    const { doc } = this.props;
    return (
      <Formsy.Form
        onValid={this.enableButton.bind(this)}
        onInvalid={this.disableButton.bind(this)}
        onValidSubmit={this.handleSubmit.bind(this)}
      >
        <FormsyText
          type="text"
          name="title"
          placeholder="Title"
          hintText="Title"
          defaultValue={ doc && doc.title }
          required
        /><br/>
        <FormsyText
          type="text"
          name="body"
          multiLine={true}
          placeholder="Body"
          hintText="Body"
          defaultValue={ doc && doc.body }
          required
        /><br/><br/>
        <RaisedButton
          type="submit"
          label={ doc && doc._id ? 'Save Changes' : 'Add Document' }
          primary={true}
          disabled={!this.state.canSubmit}
        />
      </Formsy.Form>
    );
  }
}

DocumentEditor.propTypes = {
  doc: PropTypes.object,
};
