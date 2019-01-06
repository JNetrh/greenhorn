import React from 'react';
import { TaskItem } from './TaskItem';

export const TasksToDoList = ({ tasks }) => (
  <div>
    {tasks.map(task => (
      <TaskItem key={task.id} {...task} />
    ))}
  </div>
);
