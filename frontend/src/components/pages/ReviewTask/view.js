import React, { Component } from 'react';
import { TasksToDoList } from '../../molecules/TasksToDoList';
import { Container } from '../../atoms/Container';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import emoji from '../../../static/Up_Pointing_Hand_Emoji.png';

export const LogoWrapper = styled.div`
  img {
    width: 30px;
  }
`;

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
          <LogoWrapper>
            Time to review tasks! <img src={emoji} />
          </LogoWrapper>
        </h2>
        <p>
          Here you can find all the tasks which need check from you! Please,
          click on the each task, control them and decide if it's done or need
          additional work. Pay attention also to the severity of the task, task
          with higher severity should be prioritized over the lowest one.
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
