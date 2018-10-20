import React, { Component } from 'react';

import ListHeader from '../../atoms/ListHeader';

export default class EmployeesSider extends Component {
  clickEmployees = e => {
    console.log(e);
  };

  clickGroups = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <ListHeader onClick={this.clickEmployees}>Employees</ListHeader>

        <ListHeader onClick={this.clickEmployees}>Groups</ListHeader>
      </div>
    );
  }
}
