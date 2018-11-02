import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'antd';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Input from '../../molecules/form/Input';
import { PageFormWrapper } from '../../../styles/Forms';
import Select from '../../molecules/form/Select';

const FormItem = Form.Item;
const FormWrapper = styled.div`
  max-width: 400px;
  .ant-btn {
    margin-top: 20px;
  }
`;
const SEVERITY_OPTIONS = [{value: "a", label: "High"},{value: "b", label: "Medium"},{value: "c", label: "Low"}];
const Option = Select.Option;
const selectAfter = (
  <Select defaultValue="days" style={{ width: 80 }}>
  </Select>
);

class AddTaskForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <PageFormWrapper>
        <h2>Add task</h2>
        <p>
          First step to add task is to fill its title and estimated time when it should be finished.
          Then please choose its severity.
        </p>
      <FormWrapper>
        <Form>
            <FormItem label="Title">
            <Field
              name="title"
              component={Input}
              tabIndex={1}
              iconType="book"
              placeholder="Title"
            />

            {/* <Input placeholder="" /> */}
            
          </FormItem>
          <FormItem label="Estimated time">
            <Field
              name="estimatedTime"
              component={Input}
              tabIndex={2}
              iconType="calendar"
              placeholder="Estimated time"
              addonAfter="days"
            />
            
          </FormItem>
          
          <FormItem label = "Severity"> 
          <Field       
              name="severity"
              component={Select}
              tabIndex={3}
              options={SEVERITY_OPTIONS}
                  />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.enterIconLoading}
            >
              Create task
            </Button>
          </FormItem>
        </Form>
      </FormWrapper>
    </PageFormWrapper>
    );
  }
}

export default AddTaskForm;
