import React from 'react';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import Input from '../../molecules/form/Input';
import TextArea from '../../molecules/form/TextArea';
import Select from '../../molecules/form/Select';
import { Row, Col } from 'antd';
import { SEVERITY_OPTIONS } from '../../pages/AddTask';
import Transfer from '../../molecules/form/Transfer';

export const PERIODICITY = [
  'Every day',
  'Every week',
  'Every month',
  'Every year',
];

const PeriodicityOptions = PERIODICITY.map(time => ({
  label: time,
  value: time,
}));

export const TaskInputs = ({ groups, users, canUserEdit }) => {
  const groupOptions = groups.groups.map(({ id, name }) => ({
    label: name,
    value: id,
  }));
  const data = users.map(({ id, name, surname, role }) => ({
    key: id,
    title: (
      <span>
        {name} {surname} <i style={{ opacity: 0.5 }}>{role}</i>
      </span>
    ),
  }));
  const disabled = !canUserEdit;
  return (
    <div>
      <FormItemWithLabel
        label="Title"
        name="title"
        component={Input}
        iconType="book"
        placeholder="Title"
        disabled={disabled}
      />
      <FormItemWithLabel
        label="Task description"
        name="description"
        component={TextArea}
        placeholder="Add a short description of this task if neccessary"
        minRows={2}
        autosize
        disabled={disabled}
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
            disabled={disabled}
          />
        </Col>
        <Col sm={12}>
          <FormItemWithLabel
            label="Severity"
            name="severity"
            component={Select}
            options={SEVERITY_OPTIONS}
            disabled={disabled}
          />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col sm={12}>
          <FormItemWithLabel
            label="Assign to group"
            name="GroupId"
            placeholder="Choose group"
            component={Select}
            isLoading={groups.isLoading}
            disabled={disabled}
            options={groupOptions}
          />
        </Col>
        <Col sm={12}>
          <FormItemWithLabel
            label="Set up periodicity (Optional)"
            name="periodicity"
            component={Select}
            disabled={disabled}
            options={PeriodicityOptions}
          />
        </Col>
      </Row>
      <FormItemWithLabel
        label={'Assign task owners:'}
        name={'owners'}
        dataSource={data}
        style={{
          display: 'flex',
          marginTop: 10,
        }}
        isLoading={groups.isLoading}
        component={Transfer}
        listStyle={{ flex: 1, height: 300 }}
        titles={['Possible users', 'Task owners']}
        render={item => item.title}
        disabled={disabled}
      />
    </div>
  );
};
