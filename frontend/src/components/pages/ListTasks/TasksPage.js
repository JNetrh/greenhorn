import React, { Component } from 'react';
import Table from '../../molecules/Table';
import { getLongDate, getFromNow } from '../../../helpers/dateFormat';

const columns = [
  { title: 'Name', dataIndex: 'title', key: 'title' },
  {
    title: 'Estimated Time',
    dataIndex: 'estimatedTime',
    key: 'estimatedTime',
    render: text => `${text} days`,
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
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: date => getLongDate(date),
  },
  {
    title: 'Last Update',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: date => getFromNow(date),
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
