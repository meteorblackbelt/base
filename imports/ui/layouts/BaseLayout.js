import React from 'react';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => (children);

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
