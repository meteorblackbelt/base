import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

export default class PublicNavigation extends React.Component {
  renderSignInButton() {
    return <FlatButton label="Sign In" onClick={() => (browserHistory.push('/login'))}/>;
  }

  render() {
    const styles = {
      cursor: 'auto',
    };
    return (
      <div>
        <AppBar
          label="Toggle Drawer"
          title="Application Name"
          zDepth={0}
          onTitleTouchTap={() => (browserHistory.push('/'))}
          showMenuIconButton={false}
          iconElementRight={this.renderSignInButton()}
          titleStyle={styles}
        />
      </div>
    );
  }
}
