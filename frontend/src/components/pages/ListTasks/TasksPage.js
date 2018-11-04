import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

const RowActions = ({ id }) => (
  <Link to={`/task/${id}`}>
    <Button type="primary">Detail</Button>
  </Link>
);

const columns = [
  { title: 'Id', fixed: 'left', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'title', key: 'title' },
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
    key: 4,
    render: RowActions,
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
        scroll={{ x: 1500, y: 300 }}
      />
    );
  }
}

export default TasksPage;
