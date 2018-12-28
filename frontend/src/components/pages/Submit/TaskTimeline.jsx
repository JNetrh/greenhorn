import React from 'react';
import { Timeline } from 'antd';
import { getLongDate } from '../../../helpers/dateFormat';
import { getWorkflowColor } from '../../../helpers/getColor';
import moment from 'moment';

export const TaskTimeline = ({ workflow }) => (
  workflow.sort(compare),
  (
    <Timeline style={{ marginTop: 25 }}>
      {workflow.map(item => (
        <Timeline.Item
          key={item.id}
          color={getWorkflowColor(item.TaskStatus.name)}
        >
          {moment(item.createdAt).format('D. MMM YYYY HH:mm')} -{' '}
          {getItemText(item)}.
          <li>
            {item.note
              ? ' Commented by ' +
                item.submittedBy.name +
                ' ' +
                item.submittedBy.surname +
                ': ' +
                item.note
              : ''}
          </li>
          <li>
            {item.Documents.length > 0
              ? ' Uploaded File: ' + item.Documents[0].name
              : ''}
          </li>
        </Timeline.Item>
      ))}
    </Timeline>
  )
);

function compare(a, b) {
  if (a.createdAt > b.createdAt) return -1;
  if (a.createdAt < b.createdAt) return 1;
  return 0;
}

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
