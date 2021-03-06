import React from 'react';
import { Button, Row, Col } from 'antd';
import TextArea from '../../molecules/form/TextArea';
export const FooterButtons = ({
  onNoteChange,
  note,
  handleOk,
  handleCancel,
  hideModal,
  taskDetail,
}) => (
  <div>
    <TextArea
      placeholder="Add a comment if neccessary"
      style={{ marginBottom: 10 }}
      onChange={onNoteChange}
      value={note}
    />
    <Row type="flex" justify="space-between">
      <Col>
        <Button
          key="submit"
          type="primary"
          icon={'check'}
          onClick={e => handleOk(taskDetail)}
        >
          Accept
        </Button>
        <Button
          key="back"
          icon={'close'}
          onClick={e => handleCancel(taskDetail)}
        >
          Reject
        </Button>
      </Col>
      <Col>
        <Button onClick={hideModal}>Close</Button>
      </Col>
    </Row>
  </div>
);
