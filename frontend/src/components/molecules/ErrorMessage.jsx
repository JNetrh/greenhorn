import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../static/greenhorn_logo_dark.svg';

const ErrorWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 600px;
  max-width: 100%;
  img {
    width: 200px;
    margin-bottom: 30px;
    display: block;
  }
`;

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catgif: this.getNewCatGifUrl(),
    };
  }

  getNewCatGifUrl = () =>
    'http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=' +
    new Date().getTime();

  render() {
    const { title } = this.props;
    return (
      <ErrorWrapper>
        <ContentWrapper>
          <img src={this.state.catgif} alt="Greenhorn logo" />
          <h1>{title}</h1>
          <p>
            We are sorry for the trouble, please enjoy the random cat instead.
          </p>
          <Button
            type="primary"
            onClick={() => this.setState({ catgif: this.getNewCatGifUrl() })}
            style={{ marginRight: 20 }}
          >
            <Icon type="reload" /> get a new cat gif
          </Button>
          <Link to="/">
            <Button>
              <Icon type="home" /> back to safety
            </Button>
          </Link>
        </ContentWrapper>
      </ErrorWrapper>
    );
  }
}

export default ErrorMessage;
