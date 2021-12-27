import React from 'react';
import styled from 'styled-components';

// components
import Logo from '../components/Logo';

const Header = ({ children }) => {
  return (
    <Container>
      <Logo />
      {children}
    </Container>
  );
};

const Container = styled.header`
  z-index: 100;
`;

export default Header;
