import React from 'react';
import { Layout } from 'antd';
import AppMenu from '../molecules/AppMenu';
import { Logo } from '../atoms/Logo';
import styled from 'styled-components';

const LogoWrapper = styled(Logo)`
  margin: -5px 20px 0 20px;
  float: left;
`;
const { Header, Sider, Content } = Layout;


export const NoPageWrapper = ({ children }) => (
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
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >Sider</Sider>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);
