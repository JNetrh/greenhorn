import React from 'react';
import { Modal, Button, Row, Col } from 'antd';
import { getLongDateWithTime } from '../../../helpers/dateFormat';
import { transformDocuments } from '../../../helpers/transformDocuments';
import { DocumentsList } from '../../organisms/DocumentsList';
import TextArea from '../../molecules/form/TextArea';

export class TaskDetailModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleOk = async task => {
    const { rejectOrDoneAssignedTask } = this.props;
    await rejectOrDoneAssignedTask({
      status: 'done',
      assignedTaskId: task.id,
      note: this.state.note,
    });
    this.setState({ visible: false });
  };

  handleCancel = async task => {
    const { rejectOrDoneAssignedTask } = this.props;
    await rejectOrDoneAssignedTask({
      status: 'returned',
      assignedTaskId: task.id,
      note: this.state.note,
    });
    this.setState({ visible: false });
  };

  render() {
    const { visible, note } = this.state;
    const {
      taskDetail: { Task, Workflows },
    } = this.props;
    const latestWorkflow = Workflows[0],
      {
        submittedBy: { name, surname },
      } = latestWorkflow;
    return (
      <span>
        <Button
          size="small"
          icon={'arrows-alt'}
          style={{ marginRight: 10 }}
          onClick={this.showModal}
        >
          detail
        </Button>
        <Modal
          visible={visible}
          title={Task.title}
          onOk={this.handleOk}
          onCancel={this.hideModal}
          footer={
            <div>
              <TextArea
                placeholder="Add a comment if neccessary"
                style={{ marginBottom: 10 }}
                onChange={e => this.setState({ note: e.target.value })}
                value={note}
              />
              <Row type="flex" justify="space-between">
                <Col>
                  <Button
                    key="submit"
                    type="primary"
                    icon={'check'}
                    onClick={e => this.handleOk(this.props.taskDetail)}
                  >
                    Accept
                  </Button>
                  <Button
                    key="back"
                    icon={'close'}
                    onClick={e => this.handleCancel(this.props.taskDetail)}
                  >
                    Reject
                  </Button>
                </Col>
                <Col>
                  <Button onClick={this.hideModal}>Close</Button>
                </Col>
              </Row>
            </div>
          }
        >
          <Row>
            <Col sm={12}>
              <h4>Submited on</h4>
              <p>{getLongDateWithTime(latestWorkflow.createdOn)}</p>
            </Col>
            <Col sm={12}>
              <h4>Submited by</h4>
              <p>
                {name} {surname}
              </p>
            </Col>
          </Row>
          <h4>Comment</h4>
          <p>
            {latestWorkflow.note || <i style={{ opacity: 0.5 }}>No comment</i>}
          </p>
          <h4>Submitted documents:</h4>
          <DocumentsList items={transformDocuments(latestWorkflow.Documents)} />
        </Modal>
      </span>
    );
  }
}
