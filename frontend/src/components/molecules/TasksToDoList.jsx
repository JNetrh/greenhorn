import React from 'react';
import { TaskItem } from './TaskItem';

export const TasksToDoList = ({ tasks }) => (
  <div>
    {console.log('tasks: ', tasks)}
    {tasks.map(task => (
      <TaskItem key={task.id} {...task} />
    ))}
  </div>
);
