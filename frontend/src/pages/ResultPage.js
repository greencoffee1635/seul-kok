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

const ResultPage = () => {
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
            <Title>이달의 OTT 추천</Title>
            {/* <Text>________님, 이번달 추천하는 OTT는 ________ 입니다.</Text> */}
            {/* <Text>이번 달 가장 좋아할만한 컨텐츠는 ________입니다.</Text> */}
          </Grid>
        </Grid>

        <Grid width="40rem">
          <Wrapper>
            <div id="scroll-horizontal" style={{ height: `45em` }}>
              <HorizontalScroll>{cards}</HorizontalScroll>
            </div>
            {/* <HorizontalScroll
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
            </HorizontalScroll> */}
          </Wrapper>
        </Grid>
      </Layout>
    </Template>
  );
};

// main {
//   overflow-x: hidden;
//   display: flex;
// }

// section {
//   min-width: 50vw;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 4ch;
// }

// section:nth-child(even) {
//   background-color: teal;
//   color: white;
// }

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

export default ResultPage;
