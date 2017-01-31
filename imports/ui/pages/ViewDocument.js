/* eslint-disable max-len */

import React from 'react';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import KeyboardReturn from 'material-ui/svg-icons/hardware/keyboard-return';
import Delete from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import { removeDocument } from '../../api/documents/methods.js';

export default class ViewDocument extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      openAlert: false,
    };
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleEdit(_id) {
    browserHistory.push(`/documents/${_id}/edit`);
  }

  handleOpenAlert() {
    this.setState({ openAlert: true });
  }

  handleCloseAlert() {
    this.setState({ openAlert: false });
  }

  handleRemove(_id) {
    removeDocument.call({ _id }, (error) => {
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
          title: 'Document deleted!',
          icon: 'fa-trash-o',
          hideDelay: 5000,
        });
        browserHistory.push('/documents');
      }
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCloseAlert.bind(this)}
      />,
      <FlatButton
        label="Delete"
        secondary={true}
        onTouchTap={() => (this.handleRemove(this.props.doc._id))}
      />,
    ];
    return (
      <Col xs={8} xsOffset={2}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <FlatButton
              label="Go Back"
              icon={<KeyboardReturn />}
              onTouchTap={() => (browserHistory.push('/documents'))}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
            >
              <MenuItem
                primaryText="Edit"
                leftIcon={<ModeEdit />}
                onTouchTap={() => (this.handleEdit(this.props.doc._id))}
              />
              <Divider />
              <MenuItem
                primaryText="Delete"
                leftIcon={<Delete />}
                onTouchTap={this.handleOpenAlert.bind(this)}
              />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        <Paper style={{ marginTop: '20px', padding: '20px' }} zDepth={1}>
          <h2>{this.props.doc && this.props.doc.title}</h2>
          <p>{this.props.doc && this.props.doc.body}</p>
        </Paper>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.openAlert}
          onRequestClose={this.handleCloseAlert.bind(this)}
        >
          Delete document?
        </Dialog>
      </Col>
    );
  }
}

ViewDocument.propTypes = {
  doc: React.PropTypes.object.isRequired,
};
