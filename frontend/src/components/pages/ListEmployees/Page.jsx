import React, { Component } from 'react';
import { Table, Button } from 'antd';

const columns = [
  { title: 'Name', width: 100, dataIndex: 'name', key: 'name' },
  { title: 'Surname', dataIndex: 'surname', key: 'surname' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => {
      return <Button type="primary">Action</Button>;
    },
  },
];

class Page extends Component {
  componentDidMount = () => {
    const { startFetchEmployees } = this.props;
    startFetchEmployees();
  };

  render() {
    const { employees } = this.props;
    console.log(this.props);
    return (
      <Table
        columns={columns}
        dataSource={employees}
        scroll={{ x: 1500, y: 300 }}
      />
    );
  }
}

export default Page;
