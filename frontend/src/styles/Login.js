import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 25px 20px;
`;
export const FormUserWrapper = styled.div`
  padding: 35px 30px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
`;

export const LogoWrapper = styled.div`
  position: relative;
  top: -45px;
  background-color: white;
  margin: 0 auto;
  width: 180px;
`;

export const StyledLink = styled(Link)`
  float: right;
`;

export const Centered = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
