import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Field } from 'redux-form';
import AddUserForm from '../../organisms/AddUserForm';

export default class AddUserPage extends Component {
  handleSubmit = e => {
    console.log(e);
  };

  onSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="App">
        <div>
          <Row>
            <Col lg={8} md={12}>
              <AddUserForm
                handleSubmit={this.handleSubmit}
                onSubmit={this.onSubmit}
              />
            </Col>
            <Col lg={8} md={12} offset={2}>
              Assign templates to user section
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
