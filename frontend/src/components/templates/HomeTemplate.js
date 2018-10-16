import React from 'react';

import { Heading } from '../atoms/Heading';
import { Jumbotron } from '../atoms/Jumbotron';
import { Link } from '../atoms/Link';
import { Paragraph } from '../atoms/Paragraph';

export const HomeTemplate = ({ title, paragraph }) => (
  <Jumbotron>
    <Heading>{title}</Heading>
    <Paragraph className="lead">{paragraph}</Paragraph>
    <Link className="btn btn-lg btn-success" to="/products">
      All Products
    </Link>
  </Jumbotron>
);
