import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
// import Layout from '../components/Layout';

const MainPage = (props) => {
  return (
    <SectionWrapper>
      <Header page="main" />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  background: var(--black);

  width: 100%;
  height: 100vh;
  `;

export default MainPage;