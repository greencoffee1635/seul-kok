import React from 'react';
import styled from 'styled-components';

// components
import Logo from '../components/Logo';
import HeaderMenu from './HeaderMenu';

const Header = (props) => {
  return (
    <Container>
      <Logo />
      {props.page === 'main' ? <HeaderMenu /> : null}
    </Container>
  );
};

const Container = styled.header`
  z-index: 100;
`;

export default Header;
