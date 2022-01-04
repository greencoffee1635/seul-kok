import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Container>
      <LayoutForm>{children}</LayoutForm>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center !important;
  /* padding-top: 4rem; */
  /* position: fixed; */
`;

const LayoutForm = styled.div`
  width: 1400px;
  margin: 0 3rem 0 3rem;
  display: flex !important;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 5rem;
  /* display: flex; */
  /* margin: 0 12rem 0 12rem; */
  /* top: 0; */
  /* flex-direction: row; */
  ${({ theme }) => theme.device.tablet} {
    margin: 0 3rem 0 3rem;
  }
  ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 4rem;
  }
`;

export default Layout;
