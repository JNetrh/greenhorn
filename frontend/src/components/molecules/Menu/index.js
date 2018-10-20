import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  _getActiveMenuItem,
  _setActiveMenuItem,
} from '../../../services/Menu/actions';
import { getActiveMenuItem } from '../../../services/Menu/reducer';

import AppMenu from './AppMenu';

const Menu = props => <AppMenu {...props} />;

const mapStateToProps = storeState => {
  return {
    activeMenu: getActiveMenuItem(storeState.menu),
  };
};

const mapDispatchToProps = { _setActiveMenuItem, _getActiveMenuItem };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(Menu);
