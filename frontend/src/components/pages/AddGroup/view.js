import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { GroupInputs } from '../../organisms/Forms/GroupInputs';

const Form = props => (
  <CreateEditForm type="create" itemName="group" {...props}>
    <GroupInputs />
  </CreateEditForm>
);

export default Form;
