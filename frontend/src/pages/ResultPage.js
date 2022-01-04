import React from 'react';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import Layout from '../components/Layout';

import { head_3, sub_3 } from '../shared/textStyle';

const cards = [...new Array(10)].map((x, i) => ({
  name: `card ${i}`,
  img: 'https://source.unsplash.com/random',
}));

const ResultPage = () => {
  const child = { width: '200px', height: '320px' };
  const parent = { width: '880px', height: '689px' };
  return (
    <Template>
      <Header page="main" />
      <Layout>
        <Grid width="32rem" is_flex="space-between">
          <Grid margin="0 0 5rem 0">
            <Title>이달의 OTT 추천</Title>
            <Text>________님, 이번달 추천하는 OTT는 ________ 입니다.</Text>
            <Text>이번 달 가장 좋아할만한 컨텐츠는 ________입니다.</Text>
          </Grid>
        </Grid>

        <Grid width="55rem">
          <Wrapper style={parent}>
            <HorizontalScroll
              // pageLock={true}
              // reverseScroll={true}
              style={{ overflow: 'scroll hidden' }}
              config={{ stiffness: 100, damping: 50 }}
              className={'scrollbar'}
              // animValues={int}
            >
              <CardGrid>
                {cards.map((card) => (
                  <div>
                    <img src={card.img} style={child} alt="cardimg" />
                    {/* <p>{card.name}</p> */}
                  </div>
                ))}
              </CardGrid>
            </HorizontalScroll>
          </Wrapper>
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

const CardGrid = styled.div`
  display: grid !important;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  & div {
    margin-right: 20px;
  }
`;

export default ResultPage;
