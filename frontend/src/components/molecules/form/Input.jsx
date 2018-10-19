import React, { Component } from 'react';
import { Input as AntInput, Icon } from 'antd';

class Input extends Component {
  render() {
    const { iconType, placeholder, type, input, ...rest } = this.props;
    return (
      <AntInput
        prefix={
          <Icon type={iconType || ''} style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder={placeholder || ''}
        type={type}
        {...{ ...input, ...rest }}
      />
    );
  }
}

export default Input;
