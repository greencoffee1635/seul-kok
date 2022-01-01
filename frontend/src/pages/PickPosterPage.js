import React from 'react';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import Layout from '../components/Layout';

import {
  head_2,
  // sub_1,
  // sub_2,
  // sub_1_mobile,
  // sub_2_mobile,
} from '../shared/textStyle';

const PickPosterPage = () => {
  const cards = [...new Array(10)].map((x, i) => ({
    name: `card ${i}`,
    img: 'https://source.unsplash.com/random',
  }));
  const scrollContainer = document.querySelector('main');

  scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
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

        <Grid width="40rem">
          <Wrapper>
            <HorizontalScroll
              pageLock={true}
              reverseScroll={true}
              style={{ width: `37rem`, height: `43.061rem` }}
              //config        = {{ stiffness: int, damping: int }}
              //className     = { string }
              //animValues    = { int }
            >
              {cards.map((card) => (
                <div
                  style={{ width: '500px', height: '500px', background: 'red' }}
                >
                  <img src={card.img} alt="" />
                  <p>{card.name}</p>
                </div>
              ))}
            </HorizontalScroll>
          </Wrapper>
        </Grid>
      </Layout>
    </Template>
  );
};

// const HorizontalScroll = styled.div`
//   overflow-y: hidden; 
//   overflow-x:scroll;
//   display: flex;

//   &::-webkit-scrollbar {
//     height:6px;
//     border-radius: 6px;
//     background: rgba(255, 255, 255, 0.4);
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: rgba(0,0,0,0.3)
//     border-radius: 2px;
//   }

//   margin: 0 auto;
//   img {
//     width: 100px;
//     height: 100px;
//   }
// `;

const Title = styled.h2`
  ${head_2}
  color: var(--main);

  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;

export default PickPosterPage;
