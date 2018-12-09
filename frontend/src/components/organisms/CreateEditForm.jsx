import React, { Component } from 'react';
import { Form, Icon } from 'antd';

import { PageFormWrapper } from '../atoms/Forms';
import { FormWrapper } from '../atoms/FormWrapper';
import { CreateEditFormButtons } from './CreateEditFormButtons';

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

  render() {
    const {
      handleSubmit,
      onSubmit,
      type,
      children,
      rightSide,
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

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper rightSide={rightSide}>
            {children}
            <CreateEditFormButtons
              {...this.props}
              confirmDelete={this.confirmDelete}
            />
          </FormWrapper>
        </Form>
      </PageFormWrapper>
    );
  }
}
