import React, { Component } from 'react';
import { Form, Button, Row, Col, Popconfirm, Icon, message } from 'antd';
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
export const SEVERITY_OPTIONS = [
  { value: 'a', label: 'High' },
  { value: 'b', label: 'Medium' },
  { value: 'c', label: 'Low' },
];
const Option = Select.Option;

class AddTaskForm extends Component {
  confirm = async () => {
    const chacker = this.props.hasOwnProperty('startDeleteTask');
    if (chacker) {
      const { startDeleteTask, task } = this.props;
      await startDeleteTask(task);
    } else {
      message.error('detele function not defined')();
    }
  };

  render() {
    const { handleSubmit, onSubmit, type } = this.props;
    return (
      <PageFormWrapper>
        <h2>Add task</h2>
        <p>
          First step to add task is to fill its title and estimated time when it
          should be finished. Then please choose its severity.
        </p>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Row gutter={20}>
              <Col sm={12}>
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
              </Col>
              <Col sm={12}>
                <FormItem label="Severity">
                  <Field
                    name="severity"
                    component={Select}
                    tabIndex={3}
                    options={SEVERITY_OPTIONS}
                  />
                </FormItem>
              </Col>
            </Row>
            {type === 'edit' && (
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: '10px' }}
                >
                  Save
                </Button>
                <Popconfirm
                  title="Are you sure delete this user?"
                  icon={
                    <Icon type="question-circle-o" style={{ color: 'red' }} />
                  }
                  onConfirm={this.confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="danger">Delete</Button>
                </Popconfirm>
              </FormItem>
            )}
            {type === 'create' && (
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.enterIconLoading}
                >
                  Create task
                </Button>
              </FormItem>
            )}
          </Form>
        </FormWrapper>
      </PageFormWrapper>
    );
  }
}

export default AddTaskForm;
