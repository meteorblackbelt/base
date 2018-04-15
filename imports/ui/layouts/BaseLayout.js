import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './BaseLayout.styl';

const BaseLayout = ({ children }) => (
  React.cloneElement(children, {
    className: classNames(children.props.className, "base-layout"),
  })
);

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
