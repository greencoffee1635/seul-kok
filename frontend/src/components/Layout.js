import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  // const { roomId } = useParams;
  return <Main>{children}</Main>;
};

const Main = styled.div`
  border: 1px solid black;
  margin: 2.8rem 3rem 0 3rem;
  height: 200vh; // header test용
`;

export default Layout;