import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { UserInputs } from '../../organisms/Forms/UserInputs';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';
import Input from '../../molecules/form/Input';

const Form = props => (
  <CreateEditForm
    type="create"
    itemName="user"
    itemDescription="First step to add user is to fill his or her first name and last name. Then please add email."
    {...props}
  >
    <UserInputs {...props} />
    {/* <FormItemWithLabel
      label="Password (will not be here)"
      type="password"
      name="password"
      component={Input}
      tabIndex={4}
      iconType="lock"
      placeholder="password"
    /> */}
  </CreateEditForm>
);

export default Form;
