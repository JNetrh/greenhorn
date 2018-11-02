import React, { Component } from 'react';
import { Input as AntInput, Icon } from 'antd';
import FormItem from './FormItem';

class Input extends Component {
  render() {
    const { iconType, placeholder, type, input, ...rest } = this.props;
    return (
      <FormItem {...this.props}>
        <AntInput
          prefix={
            iconType && (
              <Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />
            )
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
