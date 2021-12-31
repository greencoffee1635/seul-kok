import React from 'react';
import styled from 'styled-components';

const Template = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  padding-top: 10rem;
  background: radial-gradient(
      60% 55% at 50% 8%,
      var(--deepdarkred) 0%,
      var(--black) 100%
    ),
    var(--violet);
  width: 100%;
  height: 120vh;
`;

export default Template;
