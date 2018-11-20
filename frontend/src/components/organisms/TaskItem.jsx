import React, { Component } from 'react';
import { List, Avatar, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { getLongDate } from '../../helpers/dateFormat';
import { getSeverityColor } from '../../helpers/severityColor';

const IconText = ({ severity, text }) => (
  <span>
    {text}
    <Tag color={getSeverityColor(severity)} style={{ marginLeft: 8 }}>
      {severity}
    </Tag>
  </span>
);

export class TaskItem extends Component {
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <List.Item
        key={item.id}
        actions={[
          <IconText severity={item.Task.severity} text="severity" key="0" />,
        ]}
      >
        <List.Item.Meta
          avatar={
            <Avatar
              style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }}
              size="large"
            >
              U
            </Avatar>
          }
          title={<Link to="/">{item.Task.title}</Link>}
          description={'Submit untill: ' + getLongDate(item.until)}
        />
        {item.Task.description}
      </List.Item>
    );
  }
}
