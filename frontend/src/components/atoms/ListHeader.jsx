import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 25px 0;
  cursor: pointer;
`;


class ListHeader extends Component {
  render() {
    const { onClick, children } = this.props;
    return (
      <Wrapper onClick={onClick}>
        {children}
      </Wrapper>
    );
  }
}

export default ListHeader;
