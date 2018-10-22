import React, { Component } from 'react';
import { Layout } from 'antd';
import SideMenu from './SideMenu';
import Header from './Header';

const { Sider, Content } = Layout;

export class PageWrapper extends Component {
  render() {
    const { children, SideNav } = this.props;
    return (
      <Layout>
        <Header />
        <Layout>
          {SideNav && (
            <Sider breakpoint="lg">
              <SideMenu structure={SideNav} />
            </Sider>
          )}
          <Content>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}
