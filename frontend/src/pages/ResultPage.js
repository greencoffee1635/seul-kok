import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Background from '../components/Background';
// import Template from '../components/Template';

import { CenterLayout } from '../components/Layout';

import { head_3, sub_3 } from '../shared/textStyle';

const cards = [...new Array(8)].map((x, i) => ({
  name: `card ${i}`,
  img: 'https://source.unsplash.com/random',
}));

const ResultPage = () => {
  const parent = { width: '40rem', height: '37rem', margin: '3rem 12rem' };
  const child = { width: '40rem', height: '35rem' };
  return (
    <Template>
      <Background />
      <Header page="main" />
      <CenterLayout>
        <Grid>
          <Title>____님의 이번달 OTT 슬콕! 하세요.</Title>
        </Grid>

        <Grid>
          <Desc style={{ color: 'var(--main)' }}>
            앉으나 서나 _____ 생각인 ____님!
          </Desc>
        </Grid>

        <ChartWrapper>
          <Chart width="30rem" height="30rem"></Chart>
        </ChartWrapper>
        <Grid>
          <Title>____님의 이번달 OTT 슬콕! 하세요.</Title>
        </Grid>

        <CardGrid>
          {cards.map((card) => (
            <div>
              <img src={card.img} width="230px" height="320px" alt="cardimg" />
              {/* <p>{card.name}</p> */}
            </div>
          ))}
        </CardGrid>
      </CenterLayout>
    </Template>
  );
};

const Template = styled.main`
  width: 100%;
  min-height: calc(300vh - 100px);
  justify-content: center;
`;

const Title = styled.h2`
  ${head_3}
  color: var(--main);
  display: flex;
  /* text-align: center; */
  justify-content: center;
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Desc = styled.p`
  display: flex;
  justify-content: center;
`;

const ChartWrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Chart = styled.div`
  width: 40rem;
  height: 40rem;
  border: 5px solid var(--white);
  background-color: var(--white);
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

export default ResultPage;
