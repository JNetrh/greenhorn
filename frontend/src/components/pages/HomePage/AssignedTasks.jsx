import React, { Component } from 'react';
import { TasksToDoList } from '../../molecules/TasksToDoList';
import { Container } from '../../atoms/Container';
import { Col, Row } from 'antd';

export class AssignedTasks extends Component {
  componentDidMount = () => {
    const { startListAssignedTasks } = this.props;
    startListAssignedTasks();
  };

  render() {
    const { nextWeekTasks, otherTasks, user, ...rest } = this.props;
    return (
      <Container style={{ marginTop: 40 }}>
        <h2>
          Hello {user.name} {user.surname}!
        </h2>
        {/* <p>
          In the section <q>Dashboard</q> you can see all tasks which have been
          assigned to you and the date when you should complete it. Please, do
          tasks with the closest date first. Pay attention also to the severity
          of the task, task with higher severity should be prioritized over the
          lowest one.
        </p> */}
        <p>
          Here you can find all the tasks assigned to you and the date when you
          should complete it. Please, do tasks with the closest date first. Pay
          attention also to the severity of the task, task with higher severity
          should be prioritized over the lowest one.
        </p>

        {nextWeekTasks.length ? (
          <Row gutter={25}>
            <Col xs={24} sm={12}>
              <h3>Tasks due in one week:</h3>
              <TasksToDoList tasks={nextWeekTasks} />
            </Col>
            <Col xs={24} sm={12}>
              <h3>Other tasks:</h3>
              <TasksToDoList tasks={otherTasks} />
            </Col>
          </Row>
        ) : (
          <div>
            <h3>Tasks to do:</h3>
            <TasksToDoList tasks={otherTasks} />
          </div>
        )}
      </Container>
    );
  }
}
