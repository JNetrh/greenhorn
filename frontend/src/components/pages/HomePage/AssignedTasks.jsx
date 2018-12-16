import React, { Component } from 'react';
import { TasksToDoList } from '../../molecules/TasksToDoList';
import { Container } from '../../atoms/Container';
import { Col, Row } from 'antd';
import emoji from '../../../static/Up_Pointing_Hand_Emoji.png';
import emoji2 from '../../../static/Sunglass_Emoji.png';

export class AssignedTasks extends Component {
  componentDidMount = () => {
    const { startListAssignedTasks } = this.props;
    startListAssignedTasks();
  };

  render() {
    const { nextWeekTasks, otherTasks, user, ...rest } = this.props;
    let tasks;
    let greeting;
    if (nextWeekTasks.length > 0) {
      greeting = (
        <h2>
          Hello {user.name} {user.surname}. Time to do some paperwork{' '}
          <img src={emoji} style={{ width: 30 }} />
        </h2>
      );
      tasks = (
        <div>
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
        </div>
      );
    } else if (nextWeekTasks.length === 0 && otherTasks.length > 0) {
      greeting = (
        <h2>
          Hello {user.name} {user.surname}. Time to do some paperwork{' '}
          <img src={emoji} style={{ width: 30 }} />
        </h2>
      );
      tasks = (
        <div>
          <h3>Tasks to do:</h3>
          <TasksToDoList tasks={otherTasks} />
        </div>
      );
    } else {
      greeting = (
        <h2>
          Hello {user.name} {user.surname}. You can chill now, you have no
          paperwork to do. <img src={emoji2} style={{ width: 30 }} />
        </h2>
      );
      tasks = (
        <div>
          <h3>
            You have got no upcoming tasks, so you can fully concentrate on your
            job.
          </h3>
          <TasksToDoList tasks={[]} />
        </div>
      );
    }

    return (
      <Container style={{ marginTop: 40 }}>
        {/* <p>
          In the section <q>Dashboard</q> you can see all tasks which have been
          assigned to you and the date when you should complete it. Please, do
          tasks with the closest date first. Pay attention also to the severity
          of the task, task with higher severity should be prioritized over the
          lowest one.
        </p> */}
        {greeting}
        <p>
          We are here to help you get through all of the neccessary paperwork to
          help you focus on what you do the best, and leave Greenhorn to do the
          rest.
          {/* Here you can find all the tasks assigned to you and the date when you
          should complete it. Please, do tasks with the closest date first. Pay
          attention also to the severity of the task, task with higher severity
          should be prioritized over the lowest one. */}
        </p>
        {tasks}
      </Container>
    );
  }
}
