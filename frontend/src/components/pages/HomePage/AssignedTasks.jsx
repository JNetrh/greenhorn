import React, { Component } from 'react';
import { Row, Col } from 'antd';

export class AssignedTasks extends Component {
  componentDidMount() {
    const { startListAssignedTasks } = this.props;
    startListAssignedTasks();
  }
  render() {
    console.log(this.props);
    return (
      <Row>
        <Col>{'Hi'}</Col>
      </Row>
    );
  }
}
