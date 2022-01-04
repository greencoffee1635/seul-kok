import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <LayoutForm>{children}</LayoutForm>;
};

const LayoutForm = styled.section`
  display: flex;
  margin: 0 12rem 0 12rem;
  box-sizing: border-box;
  justify-content: space-between;
  ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 4rem;
  }
`;

export default Layout;
