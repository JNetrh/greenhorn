import React from 'react';
import styled from 'styled-components';
import { TaskItem } from './TaskItem';

export const TaskListWrapper = styled.div`
  /* background: white; */
  /* list-style: none;
  margin: 0;
  padding: 0; */
`;

export const TasksToDoList = ({ tasks }) => (
  <TaskListWrapper>
    {console.log('tasks: ', tasks)}
    {tasks.map(task => (
      <TaskItem key={task.id} {...task} />
    ))}
  </TaskListWrapper>
);
