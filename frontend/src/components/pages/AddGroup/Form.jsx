import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'antd';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Input from '../../molecules/form/Input';
import { PageFormWrapper } from '../../../styles/Forms';
import TextArea from '../../molecules/form/TextArea';

const FormItem = Form.Item;

const FormWrapper = styled.div`
  max-width: 450px;
  .ant-btn {
    margin-top: 20px;
  }
`;

class AddGroupForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <PageFormWrapper>
        <h2>Add group</h2>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormItem label="Group name">
              <Field
                name="name"
                component={Input}
                iconType="team"
                placeholder="Group name"
              />
            </FormItem>
            <FormItem label="Group description">
              <Field
                name="description"
                component={TextArea}
                placeholder="Add a short description of this group if neccessary"
                minRows={2}
                autosize
              />
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.enterIconLoading}
              >
                Create group
              </Button>
            </FormItem>
          </Form>
        </FormWrapper>
      </PageFormWrapper>
    );
  }
}

export default AddGroupForm;
