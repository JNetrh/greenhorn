import React, { Component } from 'react';
import { Table, Button, message } from 'antd';

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
    const { startFetchUsers } = this.props;
    startFetchUsers();
  };

  loader = message.loading('Fetching users..');

  render() {
    const { users, isLoading } = this.props;
    return (
      <div>
        {isLoading && this.loader()}
        <Table
          columns={columns}
          dataSource={users}
          scroll={{ x: 1500, y: 300 }}
        />
      </div>
    );
  }
}

export default Page;
