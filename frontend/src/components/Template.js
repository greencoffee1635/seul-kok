import React from 'react';
import styled from 'styled-components';

const Template = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  width: 100%;
  padding-top: 10rem;
  background: radial-gradient(
      60% 55% at 50% 8%,
      var(--deepdarkred) 0%,
      var(--black) 100%
    ),
    var(--violet);
  min-height: calc(100vh - 100px);
`;

export default Template;
