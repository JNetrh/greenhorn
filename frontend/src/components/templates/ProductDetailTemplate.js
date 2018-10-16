import React from 'react';

import { AddProductToCartButton } from '../molecules/AddProductToCartButton';
import { Heading } from '../atoms/Heading';
import { Jumbotron } from '../atoms/Jumbotron';
import { Layout } from '../atoms/Layout';
import { LoadingIndicator } from '../molecules/LoadingIndicator';
import { Nav } from '../atoms/Nav';
import { NavItem } from '../atoms/NavItem';
import { NavTabButton } from '../atoms/NavTabButton';
import { Paragraph } from '../atoms/Paragraph';
import { Price } from '../atoms/Price';

export const ProductDetailTemplate = ({
  isLoading,
  product,
  selectTab,
  activeTabId,
}) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }

  const { title, price, shortInfo } = product;

  return (
    <Layout>
      <div className="float-right">
        <AddProductToCartButton product={product} />
      </div>
      <Jumbotron>
        <Heading>{title}</Heading>
      </Jumbotron>

      <Nav className="nav-tabs mb-4">
        <NavItem>
          <NavTabButton
            active={0 === activeTabId}
            onClick={event => {
              event.preventDefault();
              selectTab(0);
            }}
          >
            Price
          </NavTabButton>
        </NavItem>
        <NavItem>
          <NavTabButton
            active={1 === activeTabId}
            onClick={event => {
              event.preventDefault();
              selectTab(1);
            }}
          >
            Info
          </NavTabButton>
        </NavItem>
      </Nav>

      {0 === activeTabId && (
        <Paragraph>
          Price: <Price amount={price} />
        </Paragraph>
      )}
      {1 === activeTabId && <Paragraph>{shortInfo}</Paragraph>}
    </Layout>
  );
};
