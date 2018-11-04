import React from 'react';
import { Table as AntTable, Button } from 'antd';
import history from '../../history';

const RowActions = ({ id }) => <Button icon="edit">Edit</Button>;

const Table = props => (
  <div style={{ background: 'white' }}>
    <AntTable
      {...props}
      scroll={{ x: true }}
      pagination={{
        hideOnSinglePage: true,
      }}
      columns={[
        ...props.columns,
        {
          title: '',
          render: RowActions,
          width: 100,
        },
      ]}
      onRow={record => ({
        onClick: () => history.push(props.rowLink(record)),
      })}
    />
  </div>
);

export default Table;
