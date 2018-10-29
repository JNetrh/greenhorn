import React, { Component } from 'react';
import { Input as AntInput, Form, Icon } from 'antd';

const FormItem = Form.Item;
class Input extends Component {
  render() {
    const {
      iconType,
      placeholder,
      type,
      input,
      meta: { touched, error, warning },
      ...rest
    } = this.props;
    const errorMessage = touched &&
        error && {
          validateStatus: 'error',
          help: error,
        },
      warningMessage = touched &&
        warning && {
          validateStatus: 'warning',
          help: warning,
        };
    return (
      <FormItem
        {...{ ...errorMessage, ...warningMessage }}
        style={{ margin: 0 }}
      >
        <AntInput
          prefix={
            <Icon type={iconType || ''} style={{ color: 'rgba(0,0,0,.25)' }} />
          }
          placeholder={placeholder || ''}
          type={type}
          {...{ ...input, ...rest }}
        />
      </FormItem>
    );
  }
}

export default Input;
