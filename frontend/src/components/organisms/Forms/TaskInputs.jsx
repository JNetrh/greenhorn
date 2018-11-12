import React from 'react';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import Input from '../../molecules/form/Input';
import Select from '../../molecules/form/Select';
import { Row, Col } from 'antd';
import { SEVERITY_OPTIONS } from '../../pages/AddTask';

<<<<<<< HEAD
export const TaskInputs = () => (
  <div>
    <FormItemWithLabel
      label="Title"
      name="title"
      component={Input}
      tabIndex={1}
      iconType="book"
      placeholder="Title"
    />
    <Row gutter={20}>
      <Col sm={12}>
        <FormItemWithLabel
          label="Estimated time"
          name="estimatedTime"
          component={Input}
          tabIndex={2}
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
          tabIndex={3}
          options={SEVERITY_OPTIONS}
        />
      </Col>
    </Row>
    <Row gutter={20}>
      <Col sm={12}>
        <FormItemWithLabel
          label="Assign to group"
          name="group"
          component={Select}
          tabIndex={3}
          options={SEVERITY_OPTIONS}
        />
      </Col>
    </Row>
  </div>
);
=======
export const TaskInputs = ({ groups }) => {
  const groupOptions = groups.groups.map(({ id, name }) => ({
    label: name,
    value: id,
  }));
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
>>>>>>> 3b5c253f98a0d977501f3dc369f61f01c51a721c
