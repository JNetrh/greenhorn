import React, { Component } from 'react';
import ListHeader from '../../atoms/ListHeader';
import SideNavButton from '../../atoms/SideNavButton';

export default class EmployeesSider extends Component {
  clickUsers = e => {
    console.log(e);
  };

  clickGroups = e => {
    console.log(e);
  };

  handleClickNewUser = () => {};

  handleClickListUsers = () => {};

  handleClickNewGroup = () => {};

  handleClickListGroups = () => {};

  render() {
    return (
      <div>
        <ListHeader onClick={this.clickUsers}>Users</ListHeader>
        <SideNavButton
          text={'Add New'}
          icon={'user-add'}
          onClick={this.handleClickNewUser}
        />
        <SideNavButton
          text={'List'}
          icon={'ordered-list'}
          onClick={this.handleClickListUsers}
        />
        <ListHeader onClick={this.clickUsers}>Groups</ListHeader>
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
