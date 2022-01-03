import React from 'react'
import styled from 'styled-components';


import useMotion from '../utils/useMotion';
// import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

// 짱멋진모듈(가로스크롤)
// import ScrollHorizontal from 'react-scroll-horizontal';

//components

const ComingSoonPage = () => {


  return (
    <SectionWrapper>

      {/* <LogoTitle dark {...useMotion('down', 1, 0.3)}>
        SEULKOK
      </LogoTitle> */}

      <MainContent>
        <p dark {...useMotion('down', 1, 0.2)}>이번달 <b>개봉작</b> 궁금하시죠? <br/>
        <p2 dark {...useMotion('down', 1, 0.2)}> <span style={{color:'#e8384c'}}>슬콕</span>이 알려드려요</p2></p>
        {/* <p2 dark {...useMotion('up', 2, 0.8)}> <p2 style={{color: '#e8384c'}}>슬톡</p2>이 추천해요.</p2> */}
      </MainContent>
      <MovieCard />

      <StartButton><span>이달의 OTT 추천받기</span></StartButton>


    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  margin: 0;

  width: 100%;
  top: 120%;

  text-align: center;
  position: absolute;

  `;

  // background: radial-gradient(
  //   60% 55% at 50% 8%,
  //   #2f1316 0%,
  //   #000000 100%
  // ),
  // #594fa9;


const MainContent = styled.div`
  font-size: 2.8rem;
  line-height: 3.8rem;
  color: #ffffff;
  margin-bottom: 30px;
  p2 {
    font-size: 3.6rem;
    margin-top: 5px;
  };
`;

const StartButton = styled.button`

  text-align: center;
  cusor: pointer;

  width: 13rem;
  height: 3rem;
  margin-top: 20px;

  background: linear-gradient(80deg, #e8384c 0.73%, #b63140 100%);
  border-radius: 50em;
  border: none;

  color: #ffffff;
  font-style: normal;
  font-wight: bold;
  font-size: 1.2rem;
  span {
    font-weight: bold;
  }

  &:hover {
    color: var(--black);
    background: linear-gradient(
      to right,
      var(--main), #5a292f
    );

`


export default ComingSoonPage
