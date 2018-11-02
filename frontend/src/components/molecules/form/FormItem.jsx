import React, { Component } from 'react';
import { Form } from 'antd';

const AntFormItem = Form.Item;

class FormItem extends Component {
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
    return (
      <AntFormItem {...this.getMessages()} style={{ margin: 0 }}>
        {this.props.children}
      </AntFormItem>
    );
  }
}

export default FormItem;
