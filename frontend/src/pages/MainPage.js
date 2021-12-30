import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
// import Layout from '../components/Layout';


const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MainPage = (props) => {
  return (
    <SectionWrapper>
      <Header page="main" />
      <img src={process.env.PUBLIC_URL + `/image/image1.jpg`} alt="" />
    </SectionWrapper>
  );
};


const SectionWrapper = styled.div`
  background: var(--black);
  width: 100%;
  height: 100vh;
  `;

export default MainPage;