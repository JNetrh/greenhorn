import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Spin } from 'antd';

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

const TransitionStyle = styled.div`
  .fade {
    z-index: 1;
    &-enter {
      opacity: 0.01;
      &-active {
        opacity: 1;
        transition: all 300ms ease-out;
      }
    }
    &-exit {
      opacity: 1;
      &-active {
        opacity: 0.01;
        transition: all 300ms ease-out;
      }
    }
  }
`;

const NoAuthOverlay = ({ isActive }) => (
  <TransitionStyle>
    <CSSTransition classNames="fade" in={isActive} timeout={300} unmountOnExit>
      <Overlay>
        <Spin spinning />
      </Overlay>
    </CSSTransition>
  </TransitionStyle>
);

export default NoAuthOverlay;
