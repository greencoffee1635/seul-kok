import React from 'react';
import styled from 'styled-components';

// components
import { logo } from '../shared/textStyle';

const Logo = (props) => {
  const { history } = props;

  return (
    <LogoWrap
      onClick={() => {
        history.push('/');
      }}
    >
      {LogoTitle}
    </LogoWrap>
  );
};

const LogoTitle = 'SEULKOK';

const LogoWrap = styled.header`
  ${logo}
  color: var(--main);
  cursor: pointer;
`;

export default Logo;
