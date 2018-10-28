import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';

import Input from '../../molecules/form/Input';
import { PageFormWrapper } from '../../../styles/Forms';

const FormItem = Form.Item;

class AddUserForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <PageFormWrapper>
        <h2>Add user</h2>
        <p>
          First step to add user is to fill his or her first name and last name.
          Then please add email.
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label="First name">
            <Field
              name="name"
              component={Input}
              tabIndex={1}
              iconType="user"
              placeholder="First name"
            />

            {/* <Input placeholder="" /> */}
          </FormItem>
          <FormItem label="Last name">
            <Field
              name="surname"
              component={Input}
              tabIndex={2}
              iconType="user"
              placeholder="Last name"
            />
          </FormItem>
          <FormItem label="Email">
            <Field
              name="email"
              component={Input}
              tabIndex={3}
              iconType="mail"
              placeholder="email"
            />
          </FormItem>
          <FormItem label="Password (will not be here)">
            <Field
              type="password"
              name="password"
              component={Input}
              tabIndex={4}
              iconType="lock"
              placeholder="password"
            />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.enterIconLoading}
            >
              Submit
            </Button>
          </FormItem>
        </Form>
      </PageFormWrapper>
    );
  }
}

export default AddUserForm;
