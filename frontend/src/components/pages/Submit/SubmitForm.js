import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';

import TextArea from '../../molecules/form/TextArea';
import { FileUploadWithDropzone } from '../../organisms/FileUpload';
import { FormItem } from '../Login/style';

class SubmitForm extends Component {
  render() {
    const { handleSubmit, onSubmit, documents } = this.props;
    return (
      <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <FormItem>
          <Field
            name="documents"
            component={FileUploadWithDropzone}
            files={documents}
          />
        </FormItem>
        <FormItem>
          <Field
            name="note"
            component={TextArea}
            tabIndex={1}
            type="text"
            placeholder="Add a comment if neccessary"
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
