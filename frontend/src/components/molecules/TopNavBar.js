import React from 'react';
import { connect } from 'react-redux';

import { Layout } from '../atoms/Layout';
import { Link } from '../atoms/Link';
import { Nav } from '../atoms/Nav';
import { NavBar } from '../atoms/NavBar';
import { NavItem } from '../atoms/NavItem';
import { NavLink } from '../atoms/NavLink';
import { getNumberOfItems } from '../../services/ShoppingCart/reducer';

export const TopNavBarRaw = ({ numberOfCartItems }) => (
  <NavBar>
    <Link className="navbar-brand text-muted" to="/">
      E-shop
    </Link>
    <Layout className="navbar-collapse  justify-content-end">
      <Nav className="nav-pills">
        <NavItem className="nav-item">
          <NavLink exact className="nav-link" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/cart">
            Cart {numberOfCartItems ? `(${numberOfCartItems})` : null}
          </NavLink>
        </NavItem>
      </Nav>
    </Layout>
  </NavBar>
);

const mapStateToProps = storeState => ({
  numberOfCartItems: getNumberOfItems(storeState.shoppingCart),
});

export const TopNavBar = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }, // See: https://github.com/reduxjs/react-redux/blob/dde1a0a11dbb093f718757409b357cd04c9790e3/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
)(TopNavBarRaw);
