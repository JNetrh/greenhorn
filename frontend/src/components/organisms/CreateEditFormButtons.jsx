import React from 'react';
import { Button, Popconfirm, Icon } from 'antd';

export const CreateEditFormButtons = ({
  pristine,
  type,
  itemName,
  canUserEdit = true,
}) => {
  if (type === 'create') {
    return (
      <div>
        <Button type="primary" htmlType="submit">
          Create {itemName}
        </Button>
      </div>
    );
  }

  if (type === 'edit' && canUserEdit) {
    return (
      <div>
        <Button
          type="primary"
          htmlType="submit"
          icon="save"
          style={{ marginRight: '10px' }}
          disabled={pristine}
        >
          Save changes
        </Button>
        <Popconfirm
          title={`Do you really want to delete this ${itemName}?`}
          icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
          onConfirm={this.confirmDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" icon="delete">
            Delete
          </Button>
        </Popconfirm>
      </div>
    );
  }
};
