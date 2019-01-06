import React, { Component } from 'react';
import Table from '../../molecules/Table';
import { getFromNow, getLongDateWithTime } from '../../../helpers/dateFormat';
import { sortByTime } from '../../../helpers/sort';
import { substring } from '../../../helpers/substring';
import { Container } from '../../atoms/Container';
import { DueOnCell, DocumentsCell } from './TableCells';

const columns = [
  {
    title: 'Submited on',
    dataIndex: 'Workflows[0].createdAt',
    render: date => getLongDateWithTime(date),
    sorter: (a, b) =>
      sortByTime(a.Workflows[0].createdAt, b.Workflows[0].createdAt),
    width: 220,
  },
  {
    title: 'Submited by',
    dataIndex: 'Workflows[0].submittedBy',
    render: ({ name, surname }) => `${name} ${surname}`,
    width: 200,
  },
  {
    title: 'Task',
    dataIndex: 'Task.title',
  },
  {
    title: 'Due on',
    dataIndex: 'until',
    render: DueOnCell,
    sorter: (a, b) => sortByTime(a.until, b.until),
  },
  {
    title: 'Comment',
    dataIndex: 'Workflows[0].note',
    render: date => substring(date, 30),
  },
  {
    title: 'Documents',
    dataIndex: 'Workflows[0].Documents',
    render: DocumentsCell,
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
    const { startListReviewTasks } = this.props;
    startListReviewTasks();
  };

  getRowLink = ({ id }) => `/task/${id}`;

  render() {
    const { tasks, isLoading, currentUser } = this.props;
    return (
      <div style={{ paddingRight: '60px', paddingLeft: '60px' }}>
        <Container style={{ marginTop: 30 }}>
          <h2>Time to review tasks!</h2>
          <p>
            Here you can find all the tasks which need a check from you! Please,
            click on the each task, check them and either accept them or return
            them to the specific employee.
          </p>
        </Container>
        <Table
          loading={isLoading}
          columns={columns}
          filters={filters}
          defaultFilterValues={{ ownership: 'all' }}
          dataSource={tasks}
          rowLink={this.getRowLink}
          currentUser={currentUser}
        />
      </div>
    );
  }
}

export default TasksPage;
