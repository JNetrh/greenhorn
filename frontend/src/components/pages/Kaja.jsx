import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Form, Select, Input, Button} from 'antd';
import  Page from './Kaja/Page'

class Kaja extends Component {
  render() {
    return (
      <Page />
    );
  }
}
export default Kaja;

class Buttons extends Component {
  render(){
    return (<div>
      <Button type="primary">Add Employee</Button>
    </div>);
  }
}

const FormItem = Form.Item;

class HorizontalFormLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 3 },
      wrapperCol: { span: 5 },
    } : null;
    
    return (
      <div>
        <Form layout={formLayout}>
          <FormItem
            label="First Name:"
            {...formItemLayout}
          >
            <Input placeholder="input First Name" />
          </FormItem>
          <FormItem
            label="Last Name:"
            {...formItemLayout}
          >
            <Input placeholder="input Last Name" />
          </FormItem>
          <FormItem
            label="Email Adress:"
            {...formItemLayout}
          >
            <Input placeholder="input Email Adress" />
          </FormItem>
        </Form>
      </div>
    );
  }
}

//ReactDOM.render(<HorizontalFormLayout />, mountNode);

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

/*render(){
  return(
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select group"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="HR">HR</Option>
    <Option value="finance">Finance</Option>
    <Option value="sales">Sales</Option>
  </Select>
  );
}*/

