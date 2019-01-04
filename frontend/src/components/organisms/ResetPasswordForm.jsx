import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'antd';
import { connect } from 'react-redux';

import Input from '../molecules/form/Input';
import Logo from '../atoms/Logo';
import { forgotPassword } from '../../services/Auth/actions';
import { FormWrapper } from '../pages/Login/style';

const FormItem = Form.Item;

class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const done = await this.props.onSubmit(this.state.email);
    if (done) {
      this.setState({
        email: '',
      });
    }
  };
  render() {
    return (
      <FormWrapper>
        <Logo />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2>Forgotten password</h2>
          <p>
            Please fill in your email, click send and follow the instructions
            sent to your email.
          </p>
          <Input
            iconType="user"
            placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <FormItem style={{ margin: '20px 0 0 0' }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Reset password
            </Button>
            <Link to="/login">
              <Button>Back to login</Button>
            </Link>
          </FormItem>
        </Form>
      </FormWrapper>
    );
  }
}

export default connect(
  null,
  dispatch => ({ onSubmit: email => dispatch(forgotPassword({ email })) }),
)(ResetPasswordForm);
