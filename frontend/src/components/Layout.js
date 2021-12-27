import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  margin: 0 3rem 0 3rem;
  /* height: 200vh; // header test용 */
`;

export default Layout;
