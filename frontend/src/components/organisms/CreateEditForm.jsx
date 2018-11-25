import React, { Component } from 'react';
import { Form, Button, Popconfirm, Icon } from 'antd';

import { PageFormWrapper } from '../../styles/Forms';
import { FormWrapper } from '../atoms/FormWrapper';

export class CreateEditForm extends Component {
  state = {
    targetKeys: [],
  };
  componentDidMount() {
    const { onLoad } = this.props;
    onLoad && onLoad();
  }
  confirmDelete = () => {
    const { deleteItem, item } = this.props;
    deleteItem(item);
  };

  renderButtons = () => {
    const { type, itemName, pristine, canUserEdit = true } = this.props;

    if (type === 'create') {
      return (
        <div>
          <Button type="primary" htmlType="submit">
            Create {itemName}
          </Button>
        </div>
      );
    }

    if (canUserEdit) {
      if (type === 'edit') {
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
    }
    return null;
  };
  render() {
    const {
      handleSubmit,
      onSubmit,
      type,
      children,
      itemName,
      itemDescription,
      canUserEdit = true,
    } = this.props;
    return (
      <PageFormWrapper>
        <h2>
          {type === 'edit' ? 'Edit' : 'Add'} {itemName}
        </h2>
        <p>{itemDescription}</p>
        {!canUserEdit && (
          <div
            style={{
              marginBottom: 20,
              padding: '10px 20px',
              background: 'rgba(0,0,0,0.05)',
              display: 'inline-block',
              fontSize: 12,
            }}
          >
            <Icon type="exclamation-circle" /> You are not allowed to edit this
            task. You are not one of the task owners, or HR person.
          </div>
        )}

        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {children}
            {this.renderButtons()}
          </Form>
        </FormWrapper>
      </PageFormWrapper>
    );
  }
}
