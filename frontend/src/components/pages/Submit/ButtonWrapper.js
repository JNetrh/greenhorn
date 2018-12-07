import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

export const ButtonWrapper = styled.div`
  margin-bottom: 10px;
  @media (min-width: ${breakpoints.md}) {
    position: absolute;
    top: 5px;
    left: -120px;
  }
`;
