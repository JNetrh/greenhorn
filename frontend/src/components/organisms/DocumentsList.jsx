import React from 'react';
import { List, Icon, Button } from 'antd';

const DocumentListItem = item => (
  <List.Item
    actions={[
      <a href={item.url} key={item.url}>
        <Button icon="save">download</Button>
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
      title={<a href={item.url}>{item.title}</a>}
      description={item.description}
    />
  </List.Item>
);

const DocumentListItemSmall = item => (
  <List.Item
    actions={[
      <a href={item.url} key={item.url}>
        <Button icon="save" />
      </a>,
    ]}
    style={{ padding: '5px 0' }}
  >
    <List.Item.Meta
      style={{ fontSize: 'inherit' }}
      avatar={
        <div style={{ fontSize: 18 }}>
          <Icon type={`file-${item.fileType || 'text'}`} />
        </div>
      }
      title={<a href={item.url}>{item.title}</a>}
    />
  </List.Item>
);

export const DocumentsList = ({ items, small }) => (
  <List
    itemLayout="horizontal"
    dataSource={items}
    renderItem={small ? DocumentListItemSmall : DocumentListItem}
  />
);
