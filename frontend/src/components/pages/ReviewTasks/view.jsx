import React, { Component } from 'react';
import Table from '../../molecules/Table';
import { getLongDateWithTime } from '../../../helpers/dateFormat';
import { sortByTime } from '../../../helpers/sort';
import { substring } from '../../../helpers/substring';
import { Container } from '../../atoms/Container';
import {
  DueOnCell,
  DocumentsCell,
  StatusCell,
} from '../../organisms/ReviewTasksTableCells';
import { getWorkflowText } from '../../../helpers/workflow';
import { ReviewTasksActions } from '../../organisms/ReviewTasksTableCells';
import { ReviewTasksContainer } from '../../atoms/ReviewTasksContainer';

const columns = [
  {
    title: 'Status',
    dataIndex: 'currentWorkflow.TaskStatus.name',
    width: 100,
    render: StatusCell,
  },
  {
    title: 'When',
    dataIndex: 'currentWorkflow.createdAt',
    render: date => getLongDateWithTime(date),
    sorter: (a, b) =>
      sortByTime(a.currentWorkflow.createdAt, b.currentWorkflow.createdAt),
    width: 220,
  },
  {
    title: 'Assigned to',
    dataIndex: 'User',
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
    dataIndex: 'currentWorkflow.note',
    render: date => substring(date, 30),
  },
  {
    title: 'Documents',
    dataIndex: 'currentWorkflow.Documents',
    render: DocumentsCell,
  },
];

const filters = distinctStatuses => ({
  ownership: {
    name: 'Task status:',
    options: {
      all: {
        name: 'All',
        filter: () => true,
      },
      ...distinctStatuses.reduce((acc, statusType) => {
        acc[statusType] = {
          name: getWorkflowText(statusType),
          filter: item => item.currentWorkflow.TaskStatus.name === statusType,
        };
        return acc;
      }, {}),
    },
  },
  due: {
    name: 'Tasks due in:',
    options: {
      all: {
        name: 'All',
        filter: () => true,
      },
      overdue: {
        name: 'Overdue',
        filter: ({ until }) => new Date(until) < new Date(),
      },
    },
  },
});

class TasksPage extends Component {
  componentDidMount = () => {
    const { startListReviewTasks } = this.props;
    startListReviewTasks();
  };

  render() {
    const {
      reviewTasks: { tasks, isLoading },
      distinctStatuses,
      rejectOrDoneAssignedTask,
    } = this.props;

    const columnsWithButtons = [
      ...columns,
      {
        title: '',
        render: item => (
          <ReviewTasksActions
            task={item}
            rejectOrDoneAssignedTask={rejectOrDoneAssignedTask}
          />
        ),
        width: 200,
      },
    ];

    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <h2>Time to review tasks!</h2>
          <p>
            Here you can find all the tasks which need a check from you! Please,
            click on the each task, check them and either accept them or return
            them to the specific employee.
          </p>
        </Container>
        <ReviewTasksContainer>
          <Table
            loading={isLoading}
            columns={columnsWithButtons}
            filters={filters(distinctStatuses)}
            defaultFilterValues={{
              ownership: distinctStatuses.includes('assigned')
                ? 'assigned'
                : 'all',
              due: 'all',
            }}
            dataSource={tasks}
            showDefaultActions={false}
          />
        </ReviewTasksContainer>
      </div>
    );
  }
}

export default TasksPage;
