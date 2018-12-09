import React, { Component } from 'react';
import Table from '../../molecules/Table';

const columns = [
  { title: 'Name', width: 100, dataIndex: 'name' },
  { title: 'Description', dataIndex: 'description' },
];

class Page extends Component {
  componentDidMount = () => {
    const { startFetchGroups } = this.props;
    startFetchGroups();
  };

  render() {
    const { groups, isLoading } = this.props;
    return (
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={groups}
        rowLink={({ id }) => `/group/${id}`}
      />
    );
  }
}

export default Page;
