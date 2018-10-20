import React, { Component } from 'react';
import { Layout } from 'antd';
import AppMenu from '../molecules/Menu';
import { Logo } from '../atoms/Logo';
import styled from 'styled-components';

const LogoWrapper = styled(Logo)`
  margin: -5px 20px 0 20px;
  float: left;
  width: 10rem;
`;
const { Header, Sider, Content } = Layout;

export class PageWrapper extends Component {
  render() {
    const { children } = this.props;
    const { SideNav } = children.props;
    return (
      <Layout>
        <Header>
          <LogoWrapper />
          <AppMenu />
        </Header>
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="0">
            {SideNav}
          </Sider>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}
