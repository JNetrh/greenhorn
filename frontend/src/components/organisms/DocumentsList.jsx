import React from 'react';
import { List, Icon } from 'antd';

const DocumentListItem = item => (
  <List.Item
    actions={[
      <a href={item.url} key={item.url}>
        <Icon type="save" /> download
      </a>,
    ]}
  >
    <List.Item.Meta
      style={{ fontSize: 'inherit' }}
      avatar={
        <div style={{ fontSize: 24 }}>
          <Icon type={`file-${item.fileType || 'text'}`} />
        </div>
      }
      title={<a href={item.url || ''}>{item.title}</a>}
      description={item.description}
    />
  </List.Item>
);

export const DocumentsList = ({ items }) => (
  <List
    itemLayout="horizontal"
    dataSource={items}
    renderItem={DocumentListItem}
  />
);
