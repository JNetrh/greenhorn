import React from 'react';
import { getLongDateWithTime, getFromNow } from '../../../helpers/dateFormat';
import { Icon, Button, Tooltip } from 'antd';
import { TaskDetailModal } from './DetailModal';

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

export const ActionsCell = task => (
  <div>
    <TaskDetailModal taskDetail={task} />
    <Tooltip title="Accept">
      <Button
        type="primary"
        size="small"
        icon={'check'}
        style={{ marginRight: 5 }}
      />
    </Tooltip>
    <Tooltip title="Reject">
      <Button size="small" icon={'close'} />
    </Tooltip>
  </div>
);
