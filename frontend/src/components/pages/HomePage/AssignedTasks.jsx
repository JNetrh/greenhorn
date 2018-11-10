import React, { Component } from 'react';
import Table from '../../molecules/Table';
import { getLongDate } from '../../../helpers/dateFormat';

const columns = [
  {
    title: 'Name',
    dataIndex: 'Task.title',
    key: 'name',
  },
  {
    title: 'description',
    dataIndex: 'Task.description',
    key: 'description',
    width: 150,
  },
  {
    title: 'Severity',
    dataIndex: 'Task.severity',
    key: 'severity',
  },
  {
    title: 'Submit untill',
    dataIndex: 'untill',
    key: 'untill',
    render: date => getLongDate(date),
  },
];

export class AssignedTasks extends Component {
  componentDidMount = () => {
    const { startListAssignedTasks, fetched } = this.props;
    !fetched && startListAssignedTasks();
  };

  render() {
    const { assignedTasks, isLoading } = this.props;
    return (
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={assignedTasks.map((task, i) => {
          task['key'] = i;
          return task;
        })}
        rowLink={({ id }) => `/task/${id}`}
      />
    );
  }
}
