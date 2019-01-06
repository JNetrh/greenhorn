import React from 'react';
import { getLongDateWithTime, getFromNow } from '../../helpers/dateFormat';
import { Icon, Button, Tooltip } from 'antd';
import { getWorkflowColor, getWorkflowText } from '../../helpers/workflow';
import { TaskDetailModal } from './ReviewTaskDetailModal';

export const StatusCell = status => {
  const color = getWorkflowColor(status);
  return (
    <span style={{ color, fontSize: 12, fontWeight: 'bold' }}>
      <span
        style={{
          backgroundColor: color,
          width: 8,
          height: 8,
          marginRight: 5,
          display: 'inline-block',
          borderRadius: '100%',
        }}
      />
      {getWorkflowText(status)}
    </span>
  );
};

export const DueOnCell = date => (
  <span>
    {getLongDateWithTime(date)}
    <i
      style={{
        margin: '0 5px',
        fontSize: 12,
        opacity: 0.5,
      }}
    >
      ({getFromNow(date)})
    </i>
  </span>
);

export const DocumentsCell = documents => {
  const count = documents.length;
  if (!count) {
    return <span style={{ opacity: 0.5 }}>No documents</span>;
  }
  const { path, name } = documents[0];
  return (
    <span>
      <a href={path}>
        {name} <Icon type="file-text" style={{ marginLeft: 5, opacity: 0.5 }} />
      </a>{' '}
      {count > 1 && <span>and {count - 1} more</span>}
    </span>
  );
};

export const ReviewTasksActions = props => (
  <div>
    <TaskDetailModal
      taskDetail={props.task}
      rejectOrDoneAssignedTask={props.rejectOrDoneAssignedTask}
    />
    <Tooltip title="Accept">
      <Button
        type="primary"
        size="small"
        icon={'check'}
        style={{ marginRight: 5 }}
        onClick={e =>
          props.rejectOrDoneAssignedTask({
            status: 'done',
            assignedTaskId: props.task.id,
            note: '',
          })
        }
      />
    </Tooltip>
    <Tooltip title="Reject">
      <Button
        size="small"
        icon={'close'}
        onClick={e =>
          props.rejectOrDoneAssignedTask({
            status: 'returned',
            assignedTaskId: props.task.id,
            note: '',
          })
        }
      />
    </Tooltip>
  </div>
);
