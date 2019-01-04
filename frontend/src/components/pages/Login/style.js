import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

export const FormWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 35px 45px 25px 45px;
  width: 450px;
  @media (max-width: ${breakpoints.sm}) {
    padding: 35px 25px 15px 25px;
    width: 90%;
  }

  /* box-shadow: 0 0 60px rgba(0, 0, 0, 0.08); */
  position: relative;
  .ant-btn {
    margin-right: 10px;
  }
`;
export const FormUserWrapper = styled.div`
  padding: 35px 30px;
`;

export const StyledLink = styled(Link)`
  float: right;
`;

export const FormItem = styled.div`
  margin-bottom: 15px;
`;
