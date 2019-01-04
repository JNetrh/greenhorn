import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { UserInputs } from '../../organisms/Forms/UserInputs';

const Form = props => (
  <CreateEditForm
    type="create"
    itemName="user"
    itemDescription="First step to add user is to fill his or her first name and last name. Then please add email."
    {...props}
  >
    <UserInputs {...props} />
  </CreateEditForm>
);

export default Form;
