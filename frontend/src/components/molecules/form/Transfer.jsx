import React, { Component } from 'react';
import { Transfer as AntTransfer } from 'antd';

class Transfer extends Component {
  handleChange = movedKeys => {
    const { input } = this.props;
    input.onChange(movedKeys);
  };
  render() {
    const {
      input: { value },
    } = this.props;
    return (
      <AntTransfer
        {...this.props}
        targetKeys={value || []}
        onChange={this.handleChange}
      />
    );
  }
}

export default Transfer;
