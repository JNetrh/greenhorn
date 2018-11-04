import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { TaskInputs } from '../../organisms/Forms/TaskInputs';

const Form = props => (
  <CreateEditForm type="edit" itemName="task" {...props}>
    <TaskInputs />
  </CreateEditForm>
);

export default Form;
