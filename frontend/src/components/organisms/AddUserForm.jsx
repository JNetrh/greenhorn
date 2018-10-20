import React, { Component } from 'react';
import { Form, Button } from 'antd';
import Input from '../molecules/form/Input';
import { FormUserWrapper } from '../../styles/Login';
const FormItem = Form.Item;

class AddUserForm extends Component {
  state = {
    loading: false,
    iconLoading: false,
  };
  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };
  render() {
    return (
      <FormUserWrapper>
        <h2>Add user</h2>
        <p>
          First step to add user is to fill his or her first name and last name.
          Then please add email.
        </p>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem label="First name">
            <Input placeholder="First name" />
          </FormItem>
          <FormItem label="Last name">
            <Input placeholder="Last name" />
          </FormItem>
          <FormItem label="Email">
            <Input placeholder="email" />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              loading={this.state.iconLoading}
              onClick={this.enterIconLoading}
            >
              Submit
            </Button>
          </FormItem>
        </Form>
      </FormUserWrapper>
    );
  }
}

export default AddUserForm;
