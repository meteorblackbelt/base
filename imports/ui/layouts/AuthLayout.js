import React from 'react';
import BaseLayout from './BaseLayout.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './AuthLayout.styl';

const AuthLayout = ({ children }) => {
  let propClassName = children.props && children.props.className;

  return (
    <BaseLayout>
      {
        React.cloneElement(children, {
          className: classNames(propClassName, "auth-layout"),
        })
      }
    </BaseLayout>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
