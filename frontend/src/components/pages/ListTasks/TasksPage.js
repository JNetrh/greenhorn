import React, { Component } from 'react';
import Table from '../../molecules/Table';
import { getLongDate, getFromNow } from '../../../helpers/dateFormat';
import { substring } from '../../../helpers/substring';

const columns = [
  { title: 'Name', dataIndex: 'title', key: 'title' },
  {
    title: 'Estimated Time',
    dataIndex: 'estimatedTime',
    key: 'estimatedTime',
    render: text => `${text} days`,
    sorter: (a, b) => a.estimatedTime - b.estimatedTime,
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
    render: desc => substring(desc, 50, true),
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    render: date => getLongDate(date),
  },
  {
    title: 'Last Update',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
    render: date => getFromNow(date),
  },
];

const filters = {
  ownership: {
    name: 'Task ownership:',
    options: {
      my: {
        name: 'My tasks',
        filter: (item, { currentUser }) => item.createdById === currentUser.id,
      },
      taskowner: {
        name: 'I am task owner',
        filter: (item, { currentUser }) => {
          const taskOwnersIds = item.owners.map(({ id }) => id);
          if (taskOwnersIds.includes(currentUser.id)) {
            return true;
          }
        },
      },
      all: {
        name: 'All tasks',
        filter: () => true,
      },
    },
  },
};

class TasksPage extends Component {
  componentDidMount = () => {
    const { startListTasks, fetched } = this.props;
    !fetched && startListTasks();
  };

  getRowLink = ({ id }) => `/task/${id}`;

  render() {
    const { tasks, isLoading, currentUser } = this.props;
    return (
      <Table
        loading={isLoading}
        columns={columns}
        filters={filters}
        defaultFilterValues={{ ownership: 'my' }}
        dataSource={tasks}
        rowLink={this.getRowLink}
        currentUser={currentUser}
      />
    );
  }
}

export default TasksPage;
