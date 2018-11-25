import styled from 'styled-components';
import { Form, Radio } from 'antd';
import React from 'react';

export const TableFiltersStyle = styled.div`
  padding: 20px 35px;
  display: flex;
`;

const Filter = ({ name, options, activeValue, onChange }) => {
  return (
    <Form.Item key={name} label={name}>
      <Radio.Group value={activeValue} onChange={onChange}>
        {Object.entries(options).map(([key, { name }]) => (
          <Radio.Button key={key} value={key}>
            {name}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export const TableFilters = ({ filters, activeFilters, onFilterChange }) => (
  <TableFiltersStyle>
    <Form layout="inline">
      {Object.entries(filters).map(([filterKey, details]) => (
        <Filter
          key={filterKey}
          {...details}
          activeValue={activeFilters[filterKey]}
          onChange={e => onFilterChange({ filterKey, value: e.target.value })}
        />
      ))}
    </Form>
  </TableFiltersStyle>
);
