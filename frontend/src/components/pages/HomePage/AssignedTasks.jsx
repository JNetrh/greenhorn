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

  getGreeting = () => {
    const { user, todoTasks, tasksToReview } = this.props;
    const { name, surname } = user,
      fullName = `${name} ${surname}`;
    if (todoTasks.length > 0) {
      return (
        <h2>
          Hello {fullName}. Time to do some paperwork. Please focus on the tasks
          to do.
          <img src={emoji} style={{ width: 30 }} alt="Emoji finger" />
        </h2>
      );
    }
    if (todoTasks.length === 0 && tasksToReview.length > 0) {
      return (
        <h2>
          Hello {fullName}. There are no tasks to do for you now. Please wait
          for the review.
          <img src={emoji} style={{ width: 30 }} alt="Emoji finger" />
        </h2>
      );
    }
    return (
      <h2>
        Hello {fullName}. You can chill now, you have no paperwork to do.{' '}
        <img src={emoji2} style={{ width: 30 }} alt="Emoji smile" />
      </h2>
    );
  };

  render() {
    const { todoTasks, tasksToReview } = this.props;
    return (
      <Container style={{ marginTop: 40 }}>
        {this.getGreeting()}
        <p>
          We are here to help you get through all of the neccessary paperwork to
          help you focus on what you do the best, and leave Greenhorn to do the
          rest.
        </p>
        <div>
          <Row gutter={25}>
            <Col xs={24} sm={12}>
              <div>
                <h3>Tasks to do:</h3>
                <TasksToDoList tasks={todoTasks} />
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div>
                <h3>Tasks being reviewed:</h3>
                <TasksToDoList tasks={tasksToReview} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
