import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: ${breakpoints.md}) {
    padding: 0 15px;
  }
`;
