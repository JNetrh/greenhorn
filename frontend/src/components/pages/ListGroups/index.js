import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Page from './Page';
import { startFetchGroups } from '../../../services/Groups/api/list';

const ListGroupsPage = props => <Page {...props} />;

const mapStateToProps = ({ groups }) => {
  return {
    groups: groups.groups || [],
    fetched: groups.fetched,
    isLoading: groups.isLoading,
  };
};

const mapDispatchToProps = { startFetchGroups };
const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(ListGroupsPage);
