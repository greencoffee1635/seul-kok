import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import Layout from '../components/Layout';

import {
  head_2,
  sub_1,
  sub_2,
  sub_1_mobile,
  sub_2_mobile,
} from '../shared/textStyle';

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

const QuestionPage = (props) => {
  const { history } = props;

  return (
    <Template>
      <Header />
      <Layout>
        <Grid width="37rem" is_flex="space-between">
          <Grid margin="0 0 5rem 0">
            <Title>
              주어진 상황에 맞게 선택하고 컨텐츠에 대해서 알려주세요.
            </Title>
          </Grid>
        </Grid>

        <Grid width="45rem">
          <Scroll>
            <Text>Q1. 혼자 칠링타임이 주어졌을 때 보고싶은 소재</Text>
            <Wrapper>
              <Answer>영화/드라마</Answer>
              <Answer>예능 프로그램</Answer>
            </Wrapper>
            <Text>Q2. 극장에서 친구와 영화를 본다</Text>
            <Wrapper>
              <Answer>헐리우드 블록버스터</Answer>
              <Answer>한국</Answer>
            </Wrapper>
            <Text>Q3. 연인과 크리스마스에 보고싶은 장르</Text>
            <Wrapper>
              <Answer>코미디</Answer>
              <Answer>액션</Answer>
            </Wrapper>
            <Text>Q4. 연인과 크리스마스에 보고싶은 장르</Text>
            <Wrapper>
              <Answer>코미디</Answer>
              <Answer>액션</Answer>
            </Wrapper>
          </Scroll>
        </Grid>
      </Layout>

      <ArrowWrapper
        onClick={() => {
          history.push('/question2');
          // swiper.slideTo(0);
          // window.scrollTo(0, 0, 'smooth');
        }}
      >
        <span></span>
      </ArrowWrapper>
    </Template>
  );
};

export const ArrowWrapper = styled.div`
  padding-top: 5rem;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  cursor: pointer;
  span {
    width: 0px;
    height: 0px;
    border-radius: 2px 2px 2px 0;
    border-bottom: 40px solid var(--main);
    border-right: 40px solid transparent;
    /* -webkit-animation: ${scroll} 1.5s infinite; */
    animation: ${scroll} 1.5s infinite;
  }
`;

const Title = styled.h2`
  ${head_2}
  color: var(--main);
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Text = styled.p`
  ${sub_1}
  color: var(--white);
  ${({ theme }) => theme.device.mobile} {
    ${sub_1_mobile}
    max-width: 35rem;
  }
`;

const Scroll = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
    /* background: rgba(255, 255, 255, 0.4); */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 2px;
  }
  height: 90%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  /* margin: 0 auto; */
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;

const Answer = styled.button`
  ${sub_2}
  width: 19rem;
  height: 3.2rem;
  background: linear-gradient(80deg, var(--main) 0.73%, var(--darkred) 100%);
  color: var(--white);
  border-radius: 50px;
  border: none;
  ${({ theme }) => theme.device.mobile} {
    ${sub_2_mobile}
    width: 17rem;
  }
`;

export default QuestionPage;
