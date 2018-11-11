import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { UserInputs } from '../../organisms/Forms/UserInputs';

const Form = props => (
  <CreateEditForm type="edit" itemName="user" {...props}>
    <UserInputs {...props} />
  </CreateEditForm>
);

export default Form;
