import React from 'react';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import Input from '../../molecules/form/Input';
import Select from '../../molecules/form/Select';
import { Row, Col } from 'antd';
import { SEVERITY_OPTIONS } from '../../pages/AddTask';

export const TaskInputs = ({ groups }) => {
  const groupOptions = groups.groups.map(({ id, name }) => ({
    label: name,
    value: id,
  }));
  console.log(groupOptions, SEVERITY_OPTIONS);
  return (
    <div>
      <FormItemWithLabel
        label="Title"
        name="title"
        component={Input}
        iconType="book"
        placeholder="Title"
      />
      <Row gutter={20}>
        <Col sm={12}>
          <FormItemWithLabel
            label="Estimated time"
            name="estimatedTime"
            component={Input}
            iconType="calendar"
            placeholder="Estimated time"
            addonAfter="days"
          />
        </Col>
        <Col sm={12}>
          <FormItemWithLabel
            label="Severity"
            name="severity"
            component={Select}
            options={SEVERITY_OPTIONS}
          />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col sm={12}>
          <FormItemWithLabel
            label="Assign to group"
            name="GroupId"
            component={Select}
            isLoading={groups.isLoading}
            disabled={groups.isLoading}
            options={groupOptions}
          />
        </Col>
      </Row>
    </div>
  );
};
