import React, { Component } from 'react';
import Table from '../../molecules/Table';

const columns = [
  { title: 'Name', dataIndex: 'title', key: 'title' },
  {
    title: 'estimated time',
    dataIndex: 'estimatedTime',
    key: 'estimatedTime',
    width: 150,
  },
  {
    title: 'severity',
    dataIndex: 'severity',
    key: 'severity',
    width: 150,
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
];

class TasksPage extends Component {
  componentDidMount = () => {
    const { startListTasks } = this.props;
    startListTasks();
  };

  render() {
    const { tasks, isLoading } = this.props;
    return (
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={tasks.map((task, i) => {
          task['key'] = i;
          return task;
        })}
        rowLink={({ id }) => `/task/${id}`}
      />
    );
  }
}

export default TasksPage;
