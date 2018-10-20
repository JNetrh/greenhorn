import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Page from './Page';
import { startFetchUsers } from '../../../services/ListUsers/actions';
import {
  getUsers,
  getIsLoading,
  getIsLoaded,
  getIsError,
} from '../../../services/ListUsers/reducer';

const ListUsersPage = props => <Page {...props} />;

const mapStateToProps = storeState => {
  console.log(storeState);
  return {
    users: getUsers(storeState.listUsers),
    isLoading: getIsLoading(storeState.listUsers),
    isLoaded: getIsLoaded(storeState.listUsers),
    isError: getIsError(storeState.listUsers),
  };
};

const mapDispatchToProps = { startFetchUsers };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(ListUsersPage);
