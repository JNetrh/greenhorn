import React, { Component } from 'react';
import { Form, Button, Popconfirm, Icon } from 'antd';

import { PageFormWrapper } from '../../styles/Forms';
import { FormWrapper } from '../atoms/FormWrapper';

export class CreateEditForm extends Component {
  componentDidMount() {
    const { onLoad } = this.props;
    if (typeof onLoad !== 'undefined' && typeof onLoad === 'function') {
      onLoad & onLoad();
    }
  }
  confirmDelete = () => {
    const { deleteItem, item } = this.props;
    deleteItem(item);
  };

  render() {
    const {
      handleSubmit,
      onSubmit,
      type,
      children,
      itemName,
      itemDescription,
      pristine,
    } = this.props;
    return (
      <PageFormWrapper>
        <h2>
          {type === 'edit' ? 'Edit' : 'Add'} {itemName}
        </h2>
        <p>{itemDescription}</p>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {children}
            {type === 'edit' && (
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
                  icon={
                    <Icon type="question-circle-o" style={{ color: 'red' }} />
                  }
                  onConfirm={this.confirmDelete}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="danger" icon="delete">
                    Delete
                  </Button>
                </Popconfirm>
              </div>
            )}
            {type === 'create' && (
              <div>
                <Button type="primary" htmlType="submit">
                  Create {itemName}
                </Button>
              </div>
            )}
          </Form>
        </FormWrapper>
      </PageFormWrapper>
    );
  }
}
