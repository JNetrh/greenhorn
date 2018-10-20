import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';
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
    return null;
    // <FormUserWrapper>
    //   <h2>Add user</h2>
    //   <p>
    //     First step to add user is to fill his or her first name and last name.
    //     Then please add email.
    //   </p>
    //   <Form onSubmit={this.handleSubmit}>
    //     <FormItem label="First name">
    //       <Field
    //         name="firstName"
    //         component={Input}
    //         tabIndex={1}
    //         placeholder="First name"
    //       />

    //       {/* <Input placeholder="" /> */}
    //     </FormItem>
    //     <FormItem label="Last name">
    //       <Field
    //         name="lastName"
    //         component={Input}
    //         tabIndex={2}
    //         placeholder="Last name"
    //       />
    //     </FormItem>
    //     <FormItem label="Email">
    //       <Field
    //         name="email"
    //         component={Input}
    //         tabIndex={3}
    //         placeholder="email"
    //       />
    //     </FormItem>
    //     <FormItem>
    //       <Button
    //         type="primary"
    //         htmlType="submit"
    //         loading={this.state.iconLoading}
    //         onClick={this.enterIconLoading}
    //       >
    //         Submit
    //       </Button>
    //     </FormItem>
    //   </Form>
    // </FormUserWrapper>
  }
}

export default AddUserForm;
