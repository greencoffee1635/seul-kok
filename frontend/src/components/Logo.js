import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

// components
import { logo } from '../shared/textStyle';

const Logo = (props) => {
  return (
    <LogoWrap
      onClick={() => {
        props.history.push('/');
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

export default withRouter(Logo);
