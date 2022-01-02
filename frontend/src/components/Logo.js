import React from 'react';
import styled from 'styled-components';

// components
import { logo } from '../shared/textStyle';

const Logo = () => {
  return <LogoWrap>{LogoTitle}</LogoWrap>;
};

const LogoTitle = 'SEULKOK';

const LogoWrap = styled.header`
  ${logo}
  color: var(--main);
`;

// color: var(--main);
// text-align: center;
// display: flex;
// position: fixed;
// align-items: center;
// justify-content: space-between;
// margin-top: 20px;

export default Logo;
