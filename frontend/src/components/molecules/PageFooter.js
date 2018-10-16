import React, { Component } from 'react';

import { Layout } from '../atoms/Layout';
import { Paragraph } from '../atoms/Paragraph';

export class PageFooter extends Component {
  render() {
    return (
      <Layout className="footer">
        <Paragraph>© Company {new Date().getFullYear()}</Paragraph>
      </Layout>
    );
  }
}
