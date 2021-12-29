import React from 'react'
import styled, { keyframes } from 'styled-components';
import useMotion from '../utils/useMotion';

// import { Link } from 'react-scroll';

const IntroPage = (props) => {
  return (
    <SectionWrapper>

          <LogoTitle dark {...useMotion('down', 1, 0.3)}>
            SEULKOK
          </LogoTitle>

        <MainContent>
          <p dark {...useMotion('down', 1, 0.2)}>넷플릭스, 왓챠, 디즈니+, 쿠팡플레이스<br/>
          매번 <b>구독</b>과 <b>취소</b>의 <b>반복</b>, 귀찮으시죠?</p>

          <p dark {...useMotion('down', 2, 0.8)}>이제 <b style={{color: '#e8384c'}}>슬</b>기롭게 <b style={{color: '#e8384c'}}>콕</b>! 해결 해드릴게요.</p>

        </MainContent>

        <ButtonWrapper>
          <StartButton>START</StartButton>
        </ButtonWrapper>

        <ScrollDiv>
          슬콕 하러가기
        </ScrollDiv>

    </SectionWrapper>

  )
}


const scroll = keyframes`
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
`;

export const ScrollDiv = styled.div`
  position: relative;
  color: var(--main);
  margin: 2rem auto 0;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    margin: 1rem auto;
    padding-top: 0;
  }
`;

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

  `;

const LogoTitle = styled.header`
  color: var(--main);
  font-size: 2rem;
  margin-bottom: 50px;
`;

const MainContent = styled.div`
  font-size: 3rem;
  line-height: 3.8rem;
  color: #ffffff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StartButton = styled.button`
  display: inline;
  text-align: center;
  cusor: pointer;
  align-items: center;

  width: 9rem;
  height: 3.4rem;

  background: linear-gradient(80deg, #e8384c 0.73%, #b63140 100%);
  border-radius: 50em;
  border: none;

  color: #ffffff;
  font-style: normal;
  font-wight: bold;
  font-size: 1.7rem;

  margin-top: 40px;
`


export default IntroPage
