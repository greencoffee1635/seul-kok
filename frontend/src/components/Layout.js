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
  /* position: fixed; */
  justify-content: center !important;
`;

const LayoutForm = styled.div`
  /* display: flex; */
  /* margin: 0 12rem 0 12rem; */
  /* top: 0; */
  padding-top: 5rem;
  width: 1400px;
  box-sizing: border-box;
  display: flex !important;
  /* flex-direction: row; */

  justify-content: space-between;
  ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 4rem;
  }
`;

export default Layout;
