import React from 'react';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import DocumentEditor from '../components/DocumentEditor.js';

const style = {
  height: 'auto',
  width: '400 px',
  padding: 20,
  display: 'inline-block',
};

const NewDocument = () => (
  <Col xs={12} md={4} mdOffset={4}>
    <Paper style={style} zDepth={1}>
      <h4 className="page-header">Add New Document</h4>
      <DocumentEditor />
    </Paper>
  </Col>
);

export default NewDocument;
