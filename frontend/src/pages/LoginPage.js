import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useMotion from '../utils/useMotion';
// import { useEffect, useState } from 'react';

// 짱멋진모듈(가로스크롤)
// import ScrollHorizontal from 'react-scroll-horizontal';

//components
// import SignupTemplate from '../components/SignupTemplate';

const LoginPage = () => {
  return (
    <>
      <SectionWrapper>
        <LogoTitle dark {...useMotion('down', 1, 0.3)}>
          SEULKOK
        </LogoTitle>

        <MainContent>
          <p dark {...useMotion('down', 1, 0.2)}>
            <b>슬콕</b>과 함께하고 계신가요? <br />
            <p2 dark {...useMotion('down', 1, 0.2)}>
              <span style={{ color: '#e8384c' }}>슬콕</span>에 오신 것을
              환영합니다
            </p2>
          </p>
        </MainContent>

        <Wrapper>
          <LoginForm>
            <Link to="/main">
              <FormButton>
                <b style={{ color: '#55ca6c' }}>NAVER</b>로 로그인
              </FormButton>
            </Link>
            <Link to="/main">
              <FormButton>
                <b style={{ color: '#f9e14c' }}>Kakao</b>로 로그인
              </FormButton>
            </Link>
            <div>
              간단하게 <b>슬콕</b>을 이용하세요!
            </div>
          </LoginForm>
        </Wrapper>
      </SectionWrapper>
    </>
  );
};

const SectionWrapper = styled.div`
  background: radial-gradient(60% 55% at 50% 8%, #2f1316 0%, #000000 100%),
    #594fa9;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  /* justify-content:center; */
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
  top: 10%;

  p2 {
    font-size: 3.6rem;
    margin-top: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginForm = styled.div`
  width: 550px;

  text-align: center;
  justify-content: center;

  div {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

const FormButton = styled.button`
  font-size: 1rem;

  border-radius: 5px;
  border: 2px solid var(--deepdarkred);

  margin-bottom: 20px;

  width: 94.3%;
  height: 40px;

  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  cursor: pointer;
`;

export default LoginPage;
