import React, { Component } from 'react';
import { Input, Icon } from 'antd';

class TextInput extends Component {
  render() {
    const { iconType, placeholder, type, ...rest } = this.props;
    return (
      <Input
        prefix={
          <Icon type={iconType || ''} style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder={placeholder || ''}
        type={type}
        {...rest}
      />
    );
  }
}

export default TextInput;
