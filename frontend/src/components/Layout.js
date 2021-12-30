import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  border: 1px solid black;
  margin: 0 3rem 0 3rem;
  height: 100vh; // header test용
`;

export default Layout;
