import React, { Component } from 'react';
import { Form, Button, Spin } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import logo from '../../../static/greenhorn_logo_dark.svg';
import Input from '../../molecules/form/Input';
import { Centered } from '../../atoms/Centered';
import { FormWrapper, FormItem } from '../Login/style';

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

  getInvitationToken = () => {
    const {
      match: {
        params: { token },
      },
    } = this.props;
    return token;
  };
  async componentDidMount() {
    const { getHelloUser } = this.props,
      token = this.getInvitationToken();

    const { User, error } = await getHelloUser(token);
    this.setState({
      user: User,
      isLoading: false,
      error,
    });
  }
  handleSubmitWithToken = payload => {
    this.props.onSubmit({
      ...payload,
      invitationToken: this.getInvitationToken(),
    });
  };
  render() {
    const { isLoading, user, error } = this.state;
    const { handleSubmit } = this.props;
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
                  <Form
                    onSubmit={handleSubmit(this.handleSubmitWithToken)}
                    className="login-form"
                  >
                    <FormItem>
                      <Field
                        component={Input}
                        name="password"
                        iconType="lock"
                        type="password"
                        placeholder="New password"
                      />
                    </FormItem>
                    <FormItem>
                      <Field
                        component={Input}
                        name="passwordRepeat"
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
