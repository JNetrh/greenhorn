import React, { Component } from 'react';
import ListHeader from '../../atoms/ListHeader';
import SideNavButton from '../../atoms/SideNavButton';

export default class EmployeesSider extends Component {
  clickEmployees = e => {
    console.log(e);
  };

  clickGroups = e => {
    console.log(e);
  };

  handleClickNewEmployee = () => {};

  handleClickListEmployees = () => {};

  handleClickNewGroup = () => {};

  handleClickListGroups = () => {};

  render() {
    return (
      <div>
        <ListHeader onClick={this.clickEmployees}>Employees</ListHeader>
        <SideNavButton
          text={'Add New'}
          icon={'user-add'}
          onClick={this.handleClickNewEmployee}
        />
        <SideNavButton
          text={'List'}
          icon={'ordered-list'}
          onClick={this.handleClickListEmployees}
        />
        <ListHeader onClick={this.clickEmployees}>Groups</ListHeader>
        <SideNavButton
          text={'Add New'}
          icon={'usergroup-add'}
          onClick={this.handleClickNewGroup}
        />
        <SideNavButton
          text={'List'}
          icon={'ordered-list'}
          onClick={this.handleClickListGroups}
        />
      </div>
    );
  }
}
