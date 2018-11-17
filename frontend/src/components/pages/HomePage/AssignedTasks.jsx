import React, { Component } from 'react';
import Table from '../../molecules/Table';
import { getLongDate } from '../../../helpers/dateFormat';
import { Centered } from '../../../styles/Login';
import { FormWrapper } from '../../../styles/Login';



<Centered>
        <div>
          <FormWrapper>
                  <h2>
                   
                    !
                  </h2>
                  <p>
                  In section To be done you can see all tasks which have been assigned to you
                   and the date you should complete it.
                   Do tasks with the closest date first please. Pay attention also to the severity of the task, 
                   task with higher severity should be prioritized over the lowest one.{' '}
                  </p>
                
          </FormWrapper>
        </div>
</Centered>;



const columns = [
  {
    title: 'Name',
    dataIndex: 'Task.title',
    key: 'name',
  },
  {
    title: 'Description',
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
      <div>
      <Centered>
          <FormWrapper>
                  <h2>
                    Hello user!
                  </h2>
                  <p>
                  In the section <q>To be done</q> you can see all tasks which have been assigned to you
                   and the date when you should complete it.
                   Please, do tasks with the closest date first. Pay attention also to the severity of the task, 
                   task with higher severity should be prioritized over the lowest one.
                  </p>       
          </FormWrapper>
      </Centered>
      <Table
     
        loading={isLoading}
        columns={columns}
        dataSource={assignedTasks.map((task, i) => {
          task['key'] = i;
          return task;
        })}
        rowLink={({ id }) => `/submit/${id}`}
      />
      </div>
    );
  }
}
