/* eslint-disable arrow-body-style */

import React from 'react';
import { browserHistory } from 'react-router';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PropTypes from 'prop-types';

export default class DocumentsList extends React.Component {
  handleNav(_id) {
    browserHistory.push(`/documents/${_id}`);
  }

  renderDocuments() {
    const documents = this.props.documents;
    if (documents.length > 0) {
      return documents.map(document => (
        <TableRow key={ document._id } hoverable={true}>
          <TableRowColumn>
            <FlatButton
              label='view'
              primary={true}
              icon={<RemoveRedEye />}
              onTouchTap={() => this.handleNav(document._id)}
            />
          </TableRowColumn>
          <TableRowColumn>
            <h4>{document.title}</h4>
          </TableRowColumn>
          <TableRowColumn>
            <h4>{document.date}</h4>
          </TableRowColumn>
        </TableRow>
      ));
    }
    return (
      <div style={{ paddingLeft: '20px' }}>
        <p>No documents yet.</p>
      </div>
    );
  }

  render() {
    return (
      <Table>
        <TableBody displayRowCheckbox={false} showRowHover={true}>
          {this.renderDocuments()}
        </TableBody>
      </Table>
    );
  }
}

DocumentsList.propTypes = {
  documents: PropTypes.array,
};
