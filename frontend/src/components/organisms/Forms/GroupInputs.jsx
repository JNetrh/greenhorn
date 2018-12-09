import React from 'react';
import { FormItemWithLabel } from '../../atoms/FormItemWithLabel';

import Input from '../../molecules/form/Input';
import TextArea from '../../molecules/form/TextArea';

export const GroupInputs = () => (
  <div>
    <FormItemWithLabel
      label="Group name"
      name="name"
      component={Input}
      iconType="team"
      placeholder="Group name"
    />
    <FormItemWithLabel
      label="Group description"
      name="description"
      component={TextArea}
      placeholder="Add a short description of this group if neccessary"
      autosize={{ minRows: 2, maxRows: 6 }}
    />
  </div>
);

export default GroupInputs;
