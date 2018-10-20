import React, { Component } from 'react';
import { List } from 'antd';

import ListHeader from '../atoms/ListHeader';


const data_1 = [
  'Ad New',
  'List',
];

const data_2 = [
  'Ad New',
  'List',
];
class SiderContent extends Component {

  clickEmployees = (e) => {
    console.log(e);
  }

  clickGroups = (e) => {
    console.log(e);
  }


  render() {
    return (
      <div>
        <ListHeader onClick={this.clickEmployees}>Employees</ListHeader>
        <List
          bordered
          dataSource={data_1}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
        <ListHeader onClick={this.clickEmployees}>Groups</ListHeader>
        <List
          bordered
          dataSource={data_2}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    );
  }
}

export default SiderContent;
