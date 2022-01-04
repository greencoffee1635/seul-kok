import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import Layout from '../components/Layout';

import { head_3, sub_3 } from '../shared/textStyle';

const MyPage = () => {
  return (
    <Template>
      <Header page="main" />
      <Layout>
        <Grid width="35rem" is_flex="space-between">
          <Grid margin="0 0 5rem 0">
            <Title>구독내역</Title>
            <Text>최근 6개월간 ________을 가장 많이 이용하셨습니다.</Text>
          </Grid>
        </Grid>

        <Grid width="35rem">
          <Title>구독관리</Title>
          <Wrapper></Wrapper>
        </Grid>
      </Layout>
    </Template>
  );
};

const Title = styled.h2`
  ${head_3}
  color: var(--main);
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Text = styled.p`
  ${sub_3}
  color: var(--main);
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  max-width: 40rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border: 4px solid gray;
  border-radius: 3px;
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;

export default MyPage;
