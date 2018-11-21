import React from 'react';
import { Timeline } from 'antd';

export const TaskTimeline = () => (
  <Timeline style={{ marginTop: 25 }}>
    <Timeline.Item>Task XY assigned to you</Timeline.Item>
    <Timeline.Item color="green">
      25th of May - Submited 2 documents
    </Timeline.Item>
    <Timeline.Item color="red">Task returned by Petr Klíč</Timeline.Item>
    <Timeline.Item>Task approved</Timeline.Item>
  </Timeline>
);
