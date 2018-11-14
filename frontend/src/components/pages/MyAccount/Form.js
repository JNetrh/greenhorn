import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import styled from 'styled-components';

import Input from '../../molecules/form/Input';
import { Centered } from '../../../styles/Login';
import { PageFormWrapper } from '../../../styles/Forms';

const CenteredForm = styled.div`
  max-width: 350px;
  margin-top: 40px;
  .ant-btn {
    margin-top: 15px;
  }
`;

const FormItem = Form.Item;

class MyAccount extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <PageFormWrapper>
        <Centered>
          <CenteredForm>
            <h2>Edit your profile</h2>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItemWithLabel
          label="First name"
          name="name"
          component={Input}
          iconType="user"
          placeholder="First name"
        />
      
        <FormItemWithLabel
          label="Last name"
          name="surname"
          component={Input}
          iconType="user"
          placeholder="Last name"
        />   
          <FormItem>
                <Button type="primary" htmlType="submit">
                  Save changes
                </Button>
              </FormItem>
            </Form>
          </CenteredForm>
        </Centered>
      </PageFormWrapper>
    );
  }
}

export default MyAccount;

