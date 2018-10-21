import React, { Component } from 'react';
import { Table, Button } from 'antd';

const RowActions = () => <Button type="primary">Action</Button>;

const columns = [
  { title: 'Name', width: 100, dataIndex: 'name', key: 'name' },
  { title: 'Surname', dataIndex: 'surname', key: 'surname' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: RowActions,
  },
];

class Page extends Component {
  componentDidMount = () => {
    const { startFetchUsers, fetched } = this.props;
    !fetched && startFetchUsers();
  };

  render() {
    const { users, isLoading } = this.props;
    return (
      <Table
        isLoading={isLoading}
        columns={columns}
        dataSource={users}
        scroll={{ x: 1500, y: 300 }}
      />
    );
  }
}

export default Page;
