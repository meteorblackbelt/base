import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { Col } from 'react-flexbox-grid';

const Loading = () => (
  <Col xs={4} xsOffset={4} style={{ textAlign: 'center' }}>
    <CircularProgress style={{ paddingTop: '20px' }}/>
  </Col>
);

export default Loading;
