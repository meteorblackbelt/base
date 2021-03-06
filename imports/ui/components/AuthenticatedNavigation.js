/* eslint-disable max-len */

import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';

export default class AuthenticatedNavigation extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      openRight: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleLogout() {
    Meteor.logout(() => browserHistory.push('/login'));
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openRight: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      openRight: false,
    });
  }

  userName() {
    const user = this.props.user;
    const name = user && user.profile ? user.profile.name : '';
    return user ? `${name}` : '';
  }

  userAvatarLetter() {
    const user = this.props.user;
    const name = user && user.profile ? user.profile.name : '';
    const letter = name.charAt(0);
    return `${letter}`;
  }

  render() {
    const styles = {
      textAlign: 'center',
    };
    return (
      <div>
        <AppBar
          label="Toggle Drawer"
          title={Meteor.settings.public.appName}
          zDepth={0}
          onTitleTouchTap={() => (browserHistory.push('/'))}
          onLeftIconButtonTouchTap={this.handleToggle}
          titleStyle={styles}
          iconElementRight={
            <FlatButton
              onClick={this.handleTouchTap.bind(this)}
              labelPosition="after"
              icon={
                <Avatar
                  size={28}
                  color={"#fff"}
                  backgroundColor={"rgba(74, 144, 226, 1)"}
                >
                  {this.userAvatarLetter()}
                </Avatar>
              }
            >
              <Popover
                open={this.state.openRight}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                onRequestClose={this.handleRequestClose.bind(this)}
              >
                <Menu>
                  <MenuItem leftIcon={<ExitToApp/>} primaryText="Sign out" onClick={this.handleLogout}/>
                </Menu>
              </Popover>
            </FlatButton>
          }
        />
        <Drawer open={this.state.open}>
          <AppBar
            zDepth={0}
            showMenuIconButton={false}
            iconElementRight={
              <IconButton onClick={this.handleToggle}>
                <NavigationClose />
              </IconButton>}
          />
          <MenuItem primaryText="Home" containerElement={<Link to="/"/>} onClick={this.handleToggle} />
          <MenuItem primaryText="Wallet" containerElement={<Link to="/wallet" />} onClick={this.handleToggle} />
          <MenuItem primaryText="Job Board" containerElement={<Link to="/jobs"/>} onClick={this.handleToggle} />
          <MenuItem primaryText="Profile" containerElement={<Link to="/profile" />} onClick={this.handleToggle} />
          <MenuItem leftIcon={<i className="fa fa-cog"></i>} containerElement={<Link to="/data"/>} onClick={this.handleToggle} />
        </Drawer>
      </div>
    );
  }
}

AuthenticatedNavigation.propTypes = {
  user: PropTypes.object,
};
