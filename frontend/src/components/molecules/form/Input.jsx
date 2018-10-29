import React, { Component } from 'react';
import { Input as AntInput, Form, Icon } from 'antd';

const FormItem = Form.Item;
class Input extends Component {
  getMessages = () => {
    const { meta } = this.props;
    if (meta && meta.touched) {
      const { error, warning } = meta;
      if (error) {
        return {
          validateStatus: 'error',
          help: error,
        };
      }
      if (warning) {
        return {
          validateStatus: 'warning',
          help: warning,
        };
      }
    }
  };
  render() {
    const { iconType, placeholder, type, input, ...rest } = this.props;

    return (
      <FormItem {...this.getMessages()} style={{ margin: 0 }}>
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
