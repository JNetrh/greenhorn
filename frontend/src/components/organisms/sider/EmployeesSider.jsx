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

  render() {
    return (
      <div>
        <ListHeader onClick={this.clickUsers}>Users</ListHeader>
        <SideNavButton
          text={'Add New'}
          icon={'user-add'}
          linkTo={'/users/addUser'}
        />
        <SideNavButton
          text={'List'}
          icon={'ordered-list'}
          linkTo={'/users/list'}
        />
        <ListHeader onClick={this.clickUsers}>Groups</ListHeader>
        <SideNavButton text={'Add New'} icon={'usergroup-add'} linkTo={'/'} />
        <SideNavButton text={'List'} icon={'ordered-list'} linkTo={'/'} />
      </div>
    );
  }
}
