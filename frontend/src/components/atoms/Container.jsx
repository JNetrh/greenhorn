import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.md}) {
    padding: 0 20px;
  }
`;
