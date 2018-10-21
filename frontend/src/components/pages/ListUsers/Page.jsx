import React, { Component } from 'react';
import { Table, Button } from 'antd';

const RowActions = () => <Button type="primary">Action</Button>;

const columns = [
  { title: 'Name', width: 100, dataIndex: 'name' },
  { title: 'Surname', dataIndex: 'surname' },
  { title: 'Email', dataIndex: 'email' },
  {
    title: 'Action',
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
      <div>
        {!isLoading && (
          <Table
            columns={columns}
            dataSource={users}
            scroll={{ x: 1500, y: 300 }}
            rowKey={({ id }) => id}
          />
        )}
      </div>
    );
  }
}

export default Page;
