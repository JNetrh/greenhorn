import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'recompose';

import {
  setActiveSubMenuItem,
  getActiveSubMenuItem,
} from '../../services/Menu/actions';

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
  background-color: ${props => setBackground(props)};
  :hover {
    background-color: #ffffff;
  }
`;

const setBackground = props => {
  console.log(props);
  const { linkTo, activeSubMenu } = props;
  if (activeSubMenu.indexOf(linkTo) > -1) {
    return '#eeeeee';
  }
  return '#488869';
};
class SideNavButton extends Component {
  onClick = () => {
    const { linkTo, setActiveSubMenuItem } = this.props;
    setActiveSubMenuItem([linkTo]);
  };

  render() {
    // console.log(this.props);
    const { text, icon, linkTo, ...rest } = this.props;
    return (
      <Link to={linkTo}>
        <ButtonWrapper onClick={this.onClick} linkTo={linkTo} {...rest}>
          <Icon type={icon} theme="outlined" />
          {text}
        </ButtonWrapper>
      </Link>
    );
  }
}
const mapStateToProps = ({ menu: { activeSubMenu } }) => ({ activeSubMenu });

const mapDispatchToProps = dispatch => ({
  setActiveSubMenuItem: keyPath => dispatch(setActiveSubMenuItem(keyPath)),
  getActiveSubMenuItem: keyPath => dispatch(getActiveSubMenuItem(keyPath)),
});

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(SideNavButton);
