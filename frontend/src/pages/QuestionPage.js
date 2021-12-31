import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import Layout from '../components/Layout';

import { head_2, sub_1, sub_2 } from '../shared/textStyle';

const QuestionPage = () => {
  return (
    <Template>
      <Header />
      <Layout>
        <Grid width="37rem" is_flex="space-between">
          <Title>주어진 상황에 맞게 선택하고 컨텐츠에 대해서 알려주세요.</Title>
        </Grid>

        <Grid width="39rem">
          <Text>Q1. 혼자 칠링타임이 주어졌을 때 보고싶은 소재</Text>
          <Wrapper>
            <Answer>영화/드라마</Answer>
            <Answer>예능 프로그램</Answer>
          </Wrapper>
          <Text>Q2. 극장에서 친구와 영화를 본다</Text>
          <Wrapper>
            <Answer>헐리우드 블랙버스터</Answer>
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
        </Grid>
      </Layout>
    </Template>
  );
};

const Title = styled.h2`
  ${head_2}
  color: var(--main);
`;

const Text = styled.p`
  ${sub_1}
  color: var(--white);
`;

const Wrapper = styled.div`
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const Answer = styled.button`
  ${sub_2}
  width: 19rem;
  height: 3.2rem;
  /* margin-right: 2rem; */
  background: linear-gradient(80deg, var(--main) 0.73%, var(--darkred) 100%);
  color: var(--white);
  border-radius: 50px;
  border: none;
`;

export default QuestionPage;
