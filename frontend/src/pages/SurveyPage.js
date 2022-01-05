import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Background from '../components/Background';
import MainHeader from '../components/MainHeader';
import { GridLayout } from '../components/Layout';
// import Template from '../components/Template';
import HorizontalScroll from 'react-scroll-horizontal';

// components
import Grid from '../components/Grid';
import PickPosterPage from './PickPosterPage';
import QuestionPage from './QuestionPage';
import {
  head_2,
  sub_1,
  sub_2,
  sub_1_mobile,
  sub_2_mobile,
} from '../shared/textStyle';

const cards = [...new Array(8)].map((x, i) => ({
  name: `card ${i}`,
  img: 'https://source.unsplash.com/random',
}));

const SurveyPage = () => {
  const parent = { width: '40rem', height: '37rem', margin: '3rem 12rem' };
  const child = { width: '40rem', height: '35rem' };
  return (
    <Template>
      <Background />
      <MainHeader />
      <GridLayout>
        <GridWrapper>
          <Grid is_flex="space-between">
            <Grid>
              <Title>
                {/* <span>주어진 상황</span>에 맞게 선택하고 <span>컨텐츠</span>에
                대해서 알려주세요. */}
                <span style={{ color: 'var(--main)' }}>주어진 상황</span>에 맞게
                <br />
                <span style={{ color: 'var(--main)' }}>선택</span>하고
                <br />
                <span style={{ color: 'var(--main)' }}>컨텐츠</span>에 대해서
                <br />
                알려주세요.
              </Title>
            </Grid>
          </Grid>

          <Grid>
            {/* <Scroll> */}
            <ScrollWrapper style={parent}>
              {/* <div style={{ justifyContent: 'space-between' }}> */}
              <HorizontalScroll
                // pageLock={true}
                // reverseScroll={true}
                style={{ overflow: 'scroll hidden' }}
                config={{ stiffness: 100, damping: 50 }}
                className={'scrollbar'}
                // animValues={int}
              >
                <QuestionWrapper style={child}>
                  <Text>
                    Q1. 과도한 공부와 업무로 번아웃이 온 당신. 이를 극복하기
                    위해
                  </Text>
                  <AnswerWrapper>
                    <Answer>
                      친구에게 당장 전화를 건다. 어디야? 놀러가자.
                    </Answer>
                    <Answer>
                      집이 최고. 그동안 밀렸던 드라마를 정주행 한다.
                    </Answer>
                    <Answer>
                      집이 최고. 그동안 밀렸던 드라마를 정주행 한다.
                    </Answer>
                    <Answer>
                      집이 최고. 그동안 밀렸던 드라마를 정주행 한다.
                    </Answer>
                  </AnswerWrapper>
                </QuestionWrapper>
                <QuestionWrapper>
                  <Text>
                    Q1. 과도한 공부와 업무로 번아웃이 온 당신. 이를 극복하기
                    위해
                  </Text>
                  <Wrapper>
                    <Answer>
                      친구에게 당장 전화를 건다. 어디야? 놀러가자.
                    </Answer>
                    <Answer>
                      집이 최고. 그동안 밀렸던 드라마를 정주행 한다.
                    </Answer>
                    <Answer>
                      집이 최고. 그동안 밀렸던 드라마를 정주행 한다.
                    </Answer>
                    <Answer>
                      집이 최고. 그동안 밀렸던 드라마를 정주행 한다.
                    </Answer>
                  </Wrapper>
                </QuestionWrapper>
              </HorizontalScroll>
              {/* </div> */}
            </ScrollWrapper>
            {/* </Scroll> */}
          </Grid>

          <Grid width="30rem" is_flex="space-between">
            <Grid>
              <Title>
                그동안{' '}
                <span style={{ color: 'var(--main)' }}>
                  즐겁게 본 <br />
                  컨텐츠
                </span>
                를 <span style={{ color: 'var(--main)' }}>선택</span>
                해주세요. (최대 3개)
              </Title>
            </Grid>
          </Grid>

          <Grid width="30rem">
            <Wrapper>
              <CardGrid>
                {cards.map((card) => (
                  <div>
                    <img
                      src={card.img}
                      width="230px"
                      height="320px"
                      alt="cardimg"
                    />
                    {/* <p>{card.name}</p> */}
                  </div>
                ))}
              </CardGrid>
            </Wrapper>
          </Grid>
        </GridWrapper>
      </GridLayout>
    </Template>
  );
};

const Template = styled.main`
  width: 100%;
  min-height: calc(200vh - 100px);
`;

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: 35rem 61rem;
  grid-template-rows: 35rem 35rem;
  grid-gap: 18rem 3rem;

  /* justify-content: space-between; */
  ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Title = styled.h2`
  ${head_2}
  color: var(--white);
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Text = styled.p`
  ${sub_1}
  color: var(--white);
  width: 39rem;
  ${({ theme }) => theme.device.mobile} {
    ${sub_1_mobile}/* max-width: 35rem; */
  }
`;

const ScrollWrapper = styled.div`
  /* max-width: 40rem; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;

  .scrollbar {
    &::-webkit-scrollbar {
      height: 8px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
    }
    width: 80%;
  }
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;

const QuestionWrapper = styled.section`
  flex-direction: column;
  margin-right: 2rem;
  justify-content: center;
  /* display: flex; */
`;

const AnswerWrapper = styled.div``;

const Answer = styled.button`
  ${sub_2}
  width: 39rem;
  height: 3.2rem;
  margin-top: 1rem;
  cursor: pointer;

  background: linear-gradient(80deg, var(--main) 0.73%, var(--darkred) 100%);
  color: var(--white);
  border-radius: 13px;
  border: none;
  ${({ theme }) => theme.device.mobile} {
    ${sub_2_mobile}
    width: 17rem;
    height: 4rem;
  }
`;

// const Scroll = styled.div`
//   overflow-y: scroll;
//   &::-webkit-scrollbar {
//     width: 6px;
//     border-radius: 6px;
//     /* background: rgba(255, 255, 255, 0.4); */
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: rgba(0, 0, 0, 0.3);
//     border-radius: 2px;
//   }
//   height: 90%;
//   margin: 0 auto;
// `;

const Wrapper = styled.div`
  /* max-width: 40rem; */
  /* display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  } */
`;

const CardGrid = styled.div`
  display: grid !important;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  grid-gap: 1rem;
  cursor: pointer;
  /* & img :hover {
    border: 3px solid;
    border-color: var(--main);
  } */
  &:last-child :hover {
    border: 2px solid var(--main);
    /* border-color:  */
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

export default SurveyPage;
