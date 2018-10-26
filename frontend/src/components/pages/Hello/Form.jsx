import React, { Component } from 'react';
import { Form, Button, Spin } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import logo from '../../../static/greenhorn_logo_dark.svg';
import Input from '../../molecules/form/Input';
import { FormWrapper, FormItem } from '../../../styles/Login';
import { Centered } from '../../../styles/Login';

const LogoWrapper = styled.div`
  margin: 0 0 60px 0;
  text-align: center;
  img {
    max-width: 100%;
    width: 350px;
  }
`;

class HelloForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: null,
      error: null,
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: { token },
      },
      getHelloUser,
    } = this.props;

    const { User, error } = await getHelloUser(token);
    this.setState({
      user: User,
      isLoading: false,
      error,
    });
  }
  render() {
    const { isLoading, user, error } = this.state;
    return (
      <Centered>
        <div>
          <LogoWrapper>
            <img src={logo} alt="Greenhorn logo" />
          </LogoWrapper>
          <FormWrapper>
            <Spin spinning={isLoading}>
              {!error ? (
                <div>
                  <h2>
                    Hello, {user ? `${user.name} ${user.surname}` : 'greenhorn'}
                    !
                  </h2>
                  <p>
                    First steps in a new company are not always easy, but
                    Greenhorn will try to guide you through your needs.{' '}
                  </p>
                  <p>First, please set up your password:</p>
                  <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                      <Input iconType="lock" placeholder="New password" />
                    </FormItem>
                    <FormItem>
                      <Input
                        iconType="lock"
                        type="password"
                        placeholder="Repeat password"
                      />
                    </FormItem>
                    <FormItem>
                      <Button type="primary" size="large" htmlType="submit">
                        Let&#39;s begin!
                      </Button>
                    </FormItem>
                  </Form>
                </div>
              ) : (
                <div>
                  <h2>{error}</h2>
                  <Link to="/login">
                    <Button>Back to login</Button>
                  </Link>
                </div>
              )}
            </Spin>
          </FormWrapper>
        </div>
      </Centered>
    );
  }
}

export default withRouter(HelloForm);
