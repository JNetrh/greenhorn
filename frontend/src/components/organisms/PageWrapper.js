import React from 'react';

// import { Layout } from '../atoms/Layout';
// import { PageFooter } from '../molecules/PageFooter';
// import { TopNavBar } from '../molecules/TopNavBar';
import { Layout } from 'antd';
import AppMenu from '../molecules/AppMenu';
import Logo from '../atoms/Logo';
const { Header, Sider, Content } = Layout;


export const PageWrapper = ({ children }) => (
  <Layout>
    <Header>
      <Logo />
      <AppMenu />
    </Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>{children}</Content>
    </Layout>
    {/* <Footer>Footer</Footer> */}
  </Layout>
  // <Layout className="container">
  //   <TopNavBar />
  //   <PageFooter />
  // </Layout>
);
