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

export default Logo;
