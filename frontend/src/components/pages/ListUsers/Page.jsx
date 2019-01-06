import React, { Component } from 'react';
import Table from '../../molecules/Table';

const columns = [
  { title: 'Name', width: 100, dataIndex: 'name' },
  { title: 'Surname', dataIndex: 'surname' },
  { title: 'Role', dataIndex: 'role' },
  { title: 'Email', dataIndex: 'email' },
];

class Page extends Component {
  componentDidMount = () => {
    const { startFetchUsers } = this.props;
    startFetchUsers();
  };

  render() {
    const { users, isLoading } = this.props;
    return (
      <div>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={users}
          rowLink={({ id }) => `/user/${id}`}
        />
      </div>
    );
  }
}

export default Page;
