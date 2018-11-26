import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';

import { FormItem } from '../../../styles/Login';
import TextArea from '../../molecules/form/TextArea';
import { UploadField } from './UploadField';

class SubmitForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <FormItem>
          <UploadField />
        </FormItem>
        <FormItem>
          <Field
            name="comment"
            component={TextArea}
            tabIndex={1}
            type="text"
            placeholder="comment"
          />
        </FormItem>
        <FormItem style={{ margin: '0 0 20px 0' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default SubmitForm;
