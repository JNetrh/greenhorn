import React from 'react';
import { Timeline } from 'antd';
import { getLongDate } from '../../../helpers/dateFormat';
import { getWorkflowColor } from '../../../helpers/workflow';

export const TaskTimeline = ({ workflow }) => (
  <Timeline style={{ marginTop: 25 }}>
    {workflow.map(item => (
      <Timeline.Item
        key={item.id}
        color={getWorkflowColor(item.TaskStatus.name)}
      >
        {getLongDate(item.createdAt)} - {getItemText(item)}
      </Timeline.Item>
    ))}
  </Timeline>
);

const getItemText = item => {
  switch (item.TaskStatus.name) {
    case 'assigned': {
      return 'Task assigned to you';
    }
    case 'submitted': {
      return `Submitted by ${item.submittedBy.name} ${
        item.submittedBy.surname
      }`;
    }
    case 'returned': {
      return `Returned by ${item.submittedBy.name} ${
        item.submittedBy.surname
      } ${item.note ? ' with comment: ' + item.note : ''}`;
    }
    case 'done': {
      return `Task finished`;
    }

    default: {
      return '';
    }
  }
};
