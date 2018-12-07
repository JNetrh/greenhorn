import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { TaskInputs } from '../../organisms/Forms/TaskInputs';
import { TaskDocuments } from '../TaskDetail/Documents';

const Form = props => (
  <CreateEditForm
    type="create"
    itemName="task"
    itemDescription="First step to add task is to fill its title and estimated time when it
  should be finished. Then please choose its severity."
    rightSide={<TaskDocuments newDocuments={props.newDocuments} />}
    {...props}
  >
    <TaskInputs {...props} />
  </CreateEditForm>
);

export default Form;
