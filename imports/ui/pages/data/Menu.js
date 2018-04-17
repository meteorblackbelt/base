import React from 'react';
import { browserHistory, Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class DataMenu extends React.Component {
  render() {
    return (
      <Paper>
        <Menu>
          <MenuItem primaryText="Back" onClick={this.goBack}/>
          <MenuItem primaryText="Jobs" onClick={() => browserHistory.push('/data/jobs')}/>
        </Menu>
      </Paper>
    );
  }
}

export default DataMenu;
