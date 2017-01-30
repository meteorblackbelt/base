import React from 'react';
import { browserHistory } from 'react-router';
import { Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import DocumentsList from '../containers/DocumentsList.js';

export default class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }

  render() {
    return (
      <Col xs={10} xsOffset={1}>
        <div>
          <Toolbar>
            <ToolbarTitle text="Documents" />
            <ToolbarGroup>
              <ToolbarSeparator />
              <RaisedButton
                label="New Document"
                primary={true}
                onTouchTap={() => (browserHistory.push('/documents/new'))}
              />
            </ToolbarGroup>
          </Toolbar>
        </div>
        <DocumentsList/>
      </Col>
    );
  }
}
