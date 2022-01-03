import React from 'react'
import styled from 'styled-components';
import useMotion from '../utils/useMotion';
import { Link } from "react-router-dom";

// import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-scroll';

const IntroPage = (props, swiper) => {
  return (
    <SectionWrapper>

          <LogoTitle dark {...useMotion('down', 1, 0.3)}>
            SEULKOK
          </LogoTitle>

        <MainContent>
          <p dark {...useMotion('down', 1, 0.2)}>넷플릭스, 왓챠, 디즈니+, 쿠팡플레이스<br/>
          매번 <b>구독</b>과 <b>취소</b>의 <b>반복</b>, 귀찮으시죠?</p>

          <p2 dark {...useMotion('up', 2, 0.8)}>이제 <p2 style={{color: '#e8384c'}}>슬</p2>기롭게 <p2 style={{color: '#e8384c'}}>콕</p2>! 해결 해드릴게요</p2>

        </MainContent>

        <Link to="/main" style={{textDecoration: 'none'}}>
          <ButtonWrapper>
            <StartButton><p2>START</p2></StartButton>
          </ButtonWrapper>
        </Link>


        <a href="/login"
            style={{color:'#e8384c', textDecoration: 'none', fontSize: '0.8rem'}}><p>슬기롭게 콕 LogIn</p></a>


    </SectionWrapper>

  )
}




// @media screen and (max-width: 480px) {
//   margin: 1rem auto;
//   padding-top: 0;
// }

//가로, 세로, 중앙

const SectionWrapper = styled.div`
  background: radial-gradient(
    40% 40% at 50% 50%,
    #2f1316 0%,
    #000000 100%
  ),
  #594fa9;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;

  p {
    font-family: noal;
  }

  `;

const LogoTitle = styled.header`
  color: var(--main);
  font-size: 2rem;
  margin-bottom: 30px;
`;

const MainContent = styled.div`
  font-size: 2.8rem;
  line-height: 3.8rem;
  color: #ffffff;
  margin-bottom: 30px;
  p2 {
    font-size: 3.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StartButton = styled.button`
  display: inline;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  align-items: center;

  width: 7.5rem;
  height: 3.2rem;

  border-radius: 50em;
  border: none;
  background: linear-gradient(to right, var(--main), #5a292f);


  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    color: var(--black);
  }




  margin-top: 40px;
`

// background: linear-gradient(80deg, #e8384c 0.73%, #b63140 100%);


export default IntroPage
