import React from 'react';
import styled from '@emotion/styled';

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 1024px;

  padding-left: 32px;
  padding-right: 32px;
`;
