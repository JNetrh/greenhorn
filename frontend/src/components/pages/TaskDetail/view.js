import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { TaskInputs } from '../../organisms/Forms/TaskInputs';
import { LabelLine } from '../../atoms/LabelLine';
import { InfoLabel } from '../../atoms/InfoLabel';
import { getLongDate, getFromNow } from '../../../helpers/dateFormat';
import { canUserEditTask } from '../../../services/Users/selectors';

const Form = props => {
  const {
    item: { createdBy, createdAt, updatedAt },
    currentUser,
  } = props;
  const canUserEdit = canUserEditTask(props.item, currentUser);
  return (
    <CreateEditForm
      type="edit"
      itemName="task"
      canUserEdit={canUserEdit}
      {...props}
    >
      <LabelLine>
        <InfoLabel label="Created by" icon="user">
          {createdBy.name} {createdBy.surname}
        </InfoLabel>
        <InfoLabel label="Created at" icon="calendar">
          {getLongDate(createdAt)}
        </InfoLabel>
        <InfoLabel label="Last update" icon="retweet">
          {getFromNow(updatedAt)}
        </InfoLabel>
      </LabelLine>
      <TaskInputs canUserEdit={canUserEdit} {...props} />
    </CreateEditForm>
  );
};

export default Form;
