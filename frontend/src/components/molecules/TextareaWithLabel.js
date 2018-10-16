import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Label } from '../atoms/Label';
import { Textarea } from '../atoms/Textarea';
import { FormGroup } from '../atoms/FormGroup';

export class TextareaWithLabel extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
  };

  render() {
    const { id, type, placeholder, label, value, ...rest } = this.props;

    return (
      <FormGroup>
        <Label id={id} label={label} />
        <Textarea
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      </FormGroup>
    );
  }
}
