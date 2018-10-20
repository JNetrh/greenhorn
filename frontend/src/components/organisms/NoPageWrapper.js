import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoPageWrapper = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
