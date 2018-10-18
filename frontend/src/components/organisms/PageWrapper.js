import React from 'react';
import { Layout } from 'antd';
import AppMenu from '../molecules/AppMenu';
import SiderContent from '../molecules/SiderContent';
import { Logo } from '../atoms/Logo';
import styled from 'styled-components';

const LogoWrapper = styled(Logo)`
  margin: -5px 20px 0 20px;
  float: left;
`;
const { Header, Sider, Content } = Layout;


export const PageWrapper = ({ children }) => (
  <Layout>
    <Header>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <AppMenu />
    </Header>
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <SiderContent />
      </Sider>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);
