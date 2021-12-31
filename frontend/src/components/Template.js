import React from 'react';
import styled from 'styled-components';

const Template = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  padding-top: 10rem;
  background: radial-gradient(60% 55% at 50% 8%, #2f1316 0%, #000000 100%),
    #594fa9;
  width: 100%;
  height: 120vh;
`;

export default Template;
