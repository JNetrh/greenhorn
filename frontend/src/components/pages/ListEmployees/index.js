import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Page from './Page';
import { startFetchEmployees } from '../../../services/EmployeesList/actions';
import {
  getEmployees,
  getIsLoading,
  getIsLoaded,
  getIsError,
} from '../../../services/EmployeesList/reducer';

const ListEmployeesPage = props => <Page {...props} />;

const mapStateToProps = storeState => {
  console.log(storeState);
  return {
    employees: getEmployees(storeState.listEmployees),
    isLoading: getIsLoading(storeState.listEmployees),
    isLoaded: getIsLoaded(storeState.listEmployees),
    isError: getIsError(storeState.listEmployees),
  };
};

const mapDispatchToProps = { startFetchEmployees };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(ListEmployeesPage);
