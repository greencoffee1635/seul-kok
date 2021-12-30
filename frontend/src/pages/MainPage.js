import React from 'react';
import styled from 'styled-components';
import Image from '/image/image1';

// components
import Header from '../components/Header';
// import useMotion from '../utils/useMotion';
// import Layout from '../components/Layout';


const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MainPage = (props) => {
  return (
    <SectionWrapper>
      <Header page="main" />
    <SectionImage>

    </SectionImage>
      {/* <img src={process.env.PUBLIC_URL + `/image/image1.jpg`} alt="" /> */}
    </SectionWrapper>
  );
};




const SectionWrapper = styled.article`
  background: var(--black);
  width: 100%;
  height: 100vh;
  `;

const SectionImage = styled.img`
  width: 100%
`
Image.defaultProps = {
  src: Image,
};




export default MainPage;