import React, { useEffect, useState } from 'react';
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

const QuestionPage = (props) => {
  const { history } = props;

  return (
    <Template>
      <Header />
      <Layout>
        <Grid width="35rem" is_flex="space-between">
          <Grid margin="0 3rem 5rem 3rem">
            <Title>
              주어진 상황에 맞게 선택하고 컨텐츠에 대해서 알려주세요.
            </Title>
          </Grid>
        </Grid>

        <Grid width="45rem" margin="0 3rem 5rem 3rem">
          <Scroll>
            <Text>
              Q1. 과도한 공부와 업무로 번아웃이 온 당신. 이를 극복하기 위해
            </Text>
            {/* <Wrapper> */}
            <Answer>
              친구에게 당장 전화를 건다. 어디야? 놀러가자. (코미디)
            </Answer>
            <Answer>
              집이 최고. 그동안 밀렸던 드라마를 정주행 한다. (드라마)
            </Answer>
            {/* </Wrapper> */}
            <Text>
              Q2. 오랜만에 애인과 영화관 데이트를 즐기기로 했다. 내가 고른
              영화는
            </Text>
            {/* <Wrapper> */}
            <Answer>
              내 어깨에 기대. 내가 지켜줄게. 무서운 공포영화 (공포영화)
            </Answer>
            <Answer>
              오랜만에 연애세포를 다시 일깨워볼까? 사랑스러운 로맨스 영화
              (로맨스)
            </Answer>
            {/* </Wrapper> */}
            <Text>
              Q3. 오랫동안 사귀었던 전 애인과 절친의 연애 사실을 알게되었다.
              나는
            </Text>
            {/* <Wrapper> */}
            <Answer>바로 친구의 멱살을 잡는다. 우당탕탕 (액션)</Answer>
            <Answer>사랑이 죄는 아니잖아. 이해해준다. (로맨스)</Answer>
            {/* </Wrapper> */}
            <Text>
              Q4. 나와 가장 친했던 친구가 갑자기 연락을 끊었다. 이 때 나는
            </Text>
            {/* <Wrapper> */}
            <Answer>
              무슨 일이 있겠지. 먼저 연락이 올 때 까지 기다린다. (로맨스)
            </Answer>
            <Answer>
              걱정되어서 잠을 잘 수가 없어. 바로 전화한다. (코미디)
            </Answer>
            {/* </Wrapper> */}
          </Scroll>
        </Grid>
      </Layout>

      <Grid>
        <Arrow
          onClick={() => {
            history.push('/question2');
            // swiper.slideTo(0);
            // window.scrollTo(0, 0, 'smooth');
          }}
        >
          <span></span>
        </Arrow>
      </Grid>
    </Template>
  );
};

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

// const Wrapper = styled.div`
//   max-width: 40rem;
//   display: flex;
//   justify-content: space-between;
//   padding-bottom: 1rem;
//   /* margin: 0 auto; */
//   ${({ theme }) => theme.device.mobile} {
//     max-width: 35rem;
//   }
// `;

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

const Arrow = styled.div`
  /* padding-top: 5rem; */
  display: flex;
  flex-direction: row;
  justify-content: center !important;
  cursor: pointer;
  span {
    width: 40px;
    height: 40px;
    border-left: 2px solid rgba(242, 38, 62, 0.41);
    border-bottom: 2px solid rgba(242, 38, 62, 0.41);
    transform: rotate(-45deg);
    animation: ${scroll} 2.8s infinite;
    /* border-radius: 2px 2px 2px 0;
    border-bottom: 40px solid var(--main);
    border-right: 40px solid transparent; */
  }
`;

// const ArrowWrapper = styled.div`
//   padding-top: 5rem;
//   display: flex;
//   justify-content: center;
//   //   cursor: pointer;
//   cursor: pointer;
//   span {
//     /* position: absolute; */
//     top: 88%;
//     left: 50%;
//     width: 40px;
//     height: 40px;
//     /* margin-left: -12px; */
//     border-left: 2px solid rgba(242, 38, 62, 0.41);
//     border-bottom: 2px solid rgba(242, 38, 62, 0.41);
//     /* -webkit-transform: rotate(-45deg); */
//     transform: rotate(-45deg);
//     /* -webkit-animation: ${scroll} 2.5s infinite; */
//     animation: ${scroll} 2.8s infinite;
//     box-sizing: border-box;
//   }
// `;

export default QuestionPage;
