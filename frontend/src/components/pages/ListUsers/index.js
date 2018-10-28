import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Page from './Page';
import { startFetchUsers } from '../../../services/Users/api/list';
import {
  getUsers,
  getIsLoading,
  getIsLoaded,
  getIsError,
} from '../../../services/Users/reducer';

const ListUsersPage = props => <Page {...props} />;

const mapStateToProps = ({ users }) => {
  return {
    users: getUsers(users),
    isLoading: getIsLoading(users),
    isLoaded: getIsLoaded(users),
    isError: getIsError(users),
    fetched: users.fetched,
  };
};

const mapDispatchToProps = { startFetchUsers };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(ListUsersPage);
