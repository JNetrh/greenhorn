import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

const RowActions = ({ id }) => (
  <Link to={`/user/${id}`}>
    <Button type="primary">Detail</Button>
  </Link>
);

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
      <div style={{ background: 'white' }}>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={users}
          scroll={{ x: true }}
        />
      </div>
    );
  }
}

export default Page;
