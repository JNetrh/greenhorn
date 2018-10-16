import React from 'react';

import { FontIcon } from '../atoms/FontIcon';
import { Layout } from '../atoms/Layout';

export const LoadingIndicator = () => (
  <Layout className="text-center h1 text-muted p-5">
    <FontIcon icon="sync-alt" spin />
  </Layout>
);
