import React from 'react';
import { Row, Col, Divider } from 'antd';
import { getLongDateWithTime } from '../../../helpers/dateFormat';
import { TaskTimeline } from '../TaskTimeline';

export const DetailModalContent = ({ taskDetail }) => {
  const {
    User: { name, surname },
  } = taskDetail;
  return (
    <div>
      <Row>
        <Col sm={12}>
          <h4>Assigned on</h4>
          <p>{getLongDateWithTime(taskDetail.createdOn)}</p>
        </Col>
        <Col sm={12}>
          <h4>Assigned to</h4>
          <p>
            {name} {surname}
          </p>
        </Col>
      </Row>
      <Divider />
      <TaskTimeline workflow={taskDetail.Workflows} />
    </div>
  );
};
