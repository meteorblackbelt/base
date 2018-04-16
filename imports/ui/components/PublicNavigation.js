import React from 'react';
import { Meteor } from 'meteor/meteor';
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
      textAlign: 'center',
    };
    return (
      <div>
        <AppBar
          label="Toggle Drawer"
          title={Meteor.settings.public.appName}
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
