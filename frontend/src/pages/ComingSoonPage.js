import React from 'react'
import styled from 'styled-components';
import useMotion from '../utils/useMotion';

const ComingSoonPage = () => {
  return (
    <SectionWrapper>
      <LogoTitle dark {...useMotion('down', 1, 0.3)}>
        SEULKOK
      </LogoTitle>

      <MainContent>
        <p dark {...useMotion('down', 1, 0.2)}>이번달 <b>개봉작</b> 궁금하시죠? <br/>
        <p2 dark {...useMotion('down', 1, 0.2)}> <span style={{color:'#e8384c'}}>슬콕</span>이 알려드려요</p2></p>
        {/* <p2 dark {...useMotion('up', 2, 0.8)}> <p2 style={{color: '#e8384c'}}>슬톡</p2>이 추천해요.</p2> */}
      </MainContent>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  background: radial-gradient(
    60% 55% at 50% 8%,
    #2f1316 0%,
    #000000 100%
  ),
  #594fa9;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  text-align: center;

  `;

const LogoTitle = styled.header`
  color: var(--main);
  font-size: 2rem;
  margin-top: 5%;
  margin-bottom: 30px;
`;

const MainContent = styled.div`
  font-size: 2.8rem;
  line-height: 3.8rem;
  color: #ffffff;
  margin-bottom: 30px;
  p2 {
    font-size: 3.6rem;
    margin-top: 5px;
  }
`;


export default ComingSoonPage
