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
    const { user, nextWeekTasks, otherTasks } = this.props;
    const { name, surname } = user,
      fullName = `${name} ${surname}`;
    if (nextWeekTasks.length > 0) {
      return (
        <h2>
          Hello {fullName}. Time to do some paperwork{' '}
          <img src={emoji} style={{ width: 30 }} alt="Emoji finger" />
        </h2>
      );
    }
    if (nextWeekTasks.length === 0 && otherTasks.length > 0) {
      return (
        <h2>
          Hello {fullName}. Time to do some paperwork{' '}
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
    const { nextWeekTasks, otherTasks } = this.props;
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
              <h3>Tasks due in one week:</h3>
              <TasksToDoList tasks={nextWeekTasks} />
            </Col>
            {!!otherTasks.length && (
              <Col xs={24} sm={12}>
                <h3>Other tasks:</h3>
                <TasksToDoList tasks={otherTasks} />
              </Col>
            )}
          </Row>
        </div>
      </Container>
    );
  }
}
