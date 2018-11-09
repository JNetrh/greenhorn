import React from 'react';
import { CreateEditForm } from '../../organisms/CreateEditForm';
import { TaskInputs } from '../../organisms/Forms/TaskInputs';
import { LabelLine } from '../../atoms/LabelLine';
import { InfoLabel } from '../../atoms/InfoLabel';
import { getLongDate, getFromNow } from '../../../helpers/dateFormat';

const Form = props => {
  const {
    item: { createdBy, createdAt, updatedAt },
  } = props;
  return (
    <CreateEditForm type="edit" itemName="task" {...props}>
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
      <TaskInputs {...props} />
    </CreateEditForm>
  );
};

export default Form;
