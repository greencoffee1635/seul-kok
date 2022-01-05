import React from 'react';
import styled from 'styled-components';
// import { Grid } from '@mui/material';

// components
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';

const Header = (props) => {
  return (
    <NavContainer>
      <NavDiv>
        <InnerDiv>
          <Logo />
          {props.page === 'main' ? <HeaderMenu /> : null}
        </InnerDiv>
      </NavDiv>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  z-index: 1;
  display: flex;
  justify-content: center !important;
`;

const NavDiv = styled.div`
  width: 1400px;
  background-color: transparent;
  margin: 0 3rem 0 3rem;
  padding-top: 3.4rem;
  justify-content: center;
  ${({ theme }) => theme.device.tablet} {
    /* margin: 0 3rem 0 3rem; */
  }
  ${({ theme }) => theme.device.mobile} {
    /* margin: 0 3rem 0 3rem; */
  }
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const StyledGrid = styled.div`

// `;

// const GridBox = styled.div`
/* padding-top: 3rem;
box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  margin-top: -8px;
  width: calc(100% + 8px);
  margin-left: -8px; */
// `;

export default Header;
