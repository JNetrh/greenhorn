import React, { Component } from 'react';
import { Devider } from 'antd/lib/divider';
import ListHeader from '../../atoms/ListHeader';
import SideNavButton from '../../atoms/SideNavButton';

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
        {/* <Devider /> */}
        <SideNavButton />
        <ListHeader onClick={this.clickEmployees}>Groups</ListHeader>
        {/* <Devider /> */}
      </div>
    );
  }
}
