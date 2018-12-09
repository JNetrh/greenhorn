import React, { Component } from 'react';
import { TasksToDoList } from '../../molecules/TasksToDoList';
import { Container } from '../../atoms/Container';
import { Col, Row, Radio } from 'antd';
import styled from 'styled-components';
import emoji from '../../../static/Up_Pointing_Hand_Emoji.png';

export const LogoWrapper = styled.div`
  img {
    width: 30px;
  }
`;

export class AssignedTasks extends Component {
  componentDidMount = () => {
    const { startListReviewTasks } = this.props;
    startListReviewTasks();
  };

  render() {
    const { tasks } = this.props;
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
        <Radio.Group style={{ marginBottom: 20 }} defaultValue="toreview">
          <Radio.Button value="toreview" selected>
            To review
          </Radio.Button>
          <Radio.Button value="rejected">Rejected</Radio.Button>
          <Radio.Button value="confirmed">Confirmed</Radio.Button>
        </Radio.Group>

        {!!tasks.length && (
          <div>
            <h3>Tasks to review:</h3>
            <TasksToDoList tasks={tasks} />
          </div>
        )}
      </Container>
    );
  }
}
