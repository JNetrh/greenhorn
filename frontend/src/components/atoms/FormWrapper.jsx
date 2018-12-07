import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const FormWrapperStyle = styled.div`
  max-width: 500px;
  .ant-btn {
    margin-top: 20px;
  }
`;

export const FormWrapper = ({ children, rightSide }) => {
  if (rightSide) {
    return (
      <Row gutter={25}>
        <Col sm={24} md={12}>
          {children}
        </Col>
        <Col sm={24} md={12}>
          {rightSide}
        </Col>
      </Row>
    );
  }
  return <FormWrapperStyle>{children}</FormWrapperStyle>;
};
