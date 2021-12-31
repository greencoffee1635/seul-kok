import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <LayoutForm>{children}</LayoutForm>;
};

const LayoutForm = styled.section`
  display: flex;
  margin: 0 10rem 0 10rem;
  box-sizing: border-box;
  justify-content: space-between;
`;

export default Layout;
