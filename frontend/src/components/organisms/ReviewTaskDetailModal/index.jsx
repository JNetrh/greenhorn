import React from 'react';
import { Modal, Button } from 'antd';
import { FooterButtons } from './FooterButtons';
import { DetailModalContent } from './Content';

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
    const { taskDetail } = this.props;
    const { Task } = taskDetail;
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
            <FooterButtons
              onNoteChange={e => this.setState({ note: e.target.value })}
              note={note}
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
              hideModal={this.hideModal}
              taskDetail={taskDetail}
            />
          }
        >
          <DetailModalContent taskDetail={taskDetail} />
        </Modal>
      </span>
    );
  }
}
