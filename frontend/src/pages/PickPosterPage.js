import React from 'react';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import Layout from '../components/Layout';

import { head_2 } from '../shared/textStyle';

const cards = [...new Array(10)].map((x, i) => ({
  name: `card ${i}`,
  img: 'https://source.unsplash.com/random',
}));

const PickPosterPage = () => {
  const child = { width: '200px', height: '320px' };
  const parent = { width: '800px', height: '689px' };
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

        <Grid width="50rem">
          <Wrapper style={parent}>
            <HorizontalScroll
              style={{ overflow: 'scroll hidden' }}
              config={{ stiffness: 100, damping: 50 }}
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
  ${head_2}
  color: var(--main);
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  /* :first-child {
    &::-webkit-scrollbar {
      height: 8px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  } */
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

export default PickPosterPage;
