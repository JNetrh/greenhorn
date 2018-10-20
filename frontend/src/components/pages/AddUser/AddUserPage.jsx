import React, { Component } from 'react';
import { Row, Col } from 'antd';
import AddUserForm from '../../organisms/AddUserForm';

export default class AddUserPage extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Row>
            <Col span={8}>
              <AddUserForm />
            </Col>
            <Col span={8} offset={2}>
              Assign templates to user section
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
