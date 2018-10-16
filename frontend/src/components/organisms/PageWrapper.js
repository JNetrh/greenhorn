import React from 'react';

// import { Layout } from '../atoms/Layout';
// import { PageFooter } from '../molecules/PageFooter';
// import { TopNavBar } from '../molecules/TopNavBar';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


export const PageWrapper = ({ children }) => (
  <Layout>
    <Header>Header</Header>
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
