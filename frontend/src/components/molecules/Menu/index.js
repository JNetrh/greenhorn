import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import AppMenu from './AppMenu';
import {
  setActiveMenuItem,
  getActiveMenuItem,
} from '../../../services/Menu/actions';

const Menu = props => <AppMenu {...props} />;

const mapStateToProps = ({ menu: { activeMenu } }) => ({ activeMenu });

const mapDispatchToProps = dispatch => ({
  setActiveMenuItem: keyPath => dispatch(setActiveMenuItem(keyPath)),
  getActiveMenuItem: keyPath => dispatch(getActiveMenuItem(keyPath)),
});

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(Menu);
