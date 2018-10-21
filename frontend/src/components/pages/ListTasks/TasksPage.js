import React, { Component } from 'react';
import { Table, Button } from 'antd';

const RowActions = () => <Button type="primary">Action</Button>;

const columns = [
  { title: 'Id', fixed: 'left', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Action',
    key: 'operation',
    render: RowActions,
  },
];

class TasksPage extends Component {
  componentDidMount = () => {
    const { startListTasks, fetched } = this.props;
    !fetched && startListTasks();
  };

  render() {
    const { tasks, isLoading } = this.props;
    return (
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={tasks}
        scroll={{ x: 1500, y: 300 }}
      />
    );
  }
}

export default TasksPage;
