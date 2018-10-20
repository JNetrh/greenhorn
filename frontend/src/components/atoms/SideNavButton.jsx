import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const ButtonWrapper = styled.div`
  width: 100%;
  height: 4em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  margin: 0.3em;
  -webkit-box-shadow: 0px 6px 11px -7px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 6px 11px -7px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 6px 11px -7px rgba(0, 0, 0, 0.55);
  background-color: #488869;
  :hover {
    background-color: #ffffff;
  }
`;

class SideNavButton extends Component {
  render() {
    const { text, icon, onClick } = this.props;
    return (
      <ButtonWrapper onClick={onClick}>
        <Icon type={icon} theme="outlined" />
        {text}
      </ButtonWrapper>
    );
  }
}

export default SideNavButton;
