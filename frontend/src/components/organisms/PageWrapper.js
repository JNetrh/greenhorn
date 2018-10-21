import React, { Component } from 'react';
import { Layout } from 'antd';
import AppMenu from '../organisms/AppMenu';
import { Logo } from '../atoms/Logo';
import styled from 'styled-components';
import SideMenu from './SideMenu';

const LogoWrapper = styled(Logo)`
  margin: -5px 20px 0 20px;
  float: left;
  width: 10rem;
`;
const { Header, Sider, Content } = Layout;

export class PageWrapper extends Component {
  render() {
    const { children, SideNav } = this.props;
    return (
      <Layout>
        <Header>
          <LogoWrapper />
          <AppMenu />
        </Header>
        <Layout>
          {SideNav && (
            <Sider breakpoint="lg" collapsedWidth="0">
              <SideMenu structure={SideNav} />
            </Sider>
          )}
          <Content>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}
