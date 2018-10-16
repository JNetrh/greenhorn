import React from 'react';

import { Layout } from '../atoms/Layout';
import { PageFooter } from '../molecules/PageFooter';
import { TopNavBar } from '../molecules/TopNavBar';

export const PageWrapper = ({ children }) => (
  <Layout className="container">
    <TopNavBar />
    {children}
    <PageFooter />
  </Layout>
);
