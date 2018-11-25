import React, { Component } from 'react';
import { Row, Col, Button, Radio } from 'antd';

export const Filters = () => (
  <div>
    <Radio.Group value={'my'} onChange={console.log}>
      <Radio.Button value="my">My tasks</Radio.Button>
      <Radio.Button value="all">All tasks</Radio.Button>
    </Radio.Group>
  </div>
);
