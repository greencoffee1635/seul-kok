import React from 'react';
import styled from 'styled-components';


const SignupTemplate = ({ children }) => {
  return(
    <SignupTemplateBlock>
      {children}
    </SignupTemplateBlock>)
}

const SignupTemplateBlock = styled.div`
  width: 600px;
  height: 300px;

  background: linear-gradient(
    to bottom right,
    #3c161b, black
  );
  border: 3px solid;
  border-radius: 16px;
  border-color: var(--main);

  margin: 0 auto;

  margin-top: 0.3%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  text-align: left;

`;
export default SignupTemplate;