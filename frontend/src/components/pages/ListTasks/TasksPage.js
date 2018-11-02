import React, { Component } from 'react';
import { Table, Button } from 'antd';

const RowActions = () => <Button type="primary">Action</Button>;

const columns = [
  { title: 'Id', fixed: 'left', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'title', key: 'name' },
  {
    title: 'estimated time',
    dataIndex: 'estimatedTime',
    key: 'estimatedTime',
  },
  {
    title: 'severity',
    dataIndex: 'severity',
    key: 'severity',
  },
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
    startListTasks();
  };

  render() {
    const { tasks, isLoading } = this.props;
    console.log(tasks);
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
