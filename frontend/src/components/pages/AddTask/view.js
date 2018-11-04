import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { TaskInputs } from '../../organisms/Forms/TaskInputs';

const Form = props => (
  <CreateEditForm
    type="create"
    itemName="task"
    itemDescription="First step to add task is to fill its title and estimated time when it
  should be finished. Then please choose its severity."
    {...props}
  >
    <TaskInputs />
  </CreateEditForm>
);

export default Form;
