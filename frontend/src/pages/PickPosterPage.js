import React from 'react';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import Layout from '../components/Layout';

import { head_2 } from '../shared/textStyle';

// const cards = [...new Array(10)].map((x, i) => ({
//   name: `card ${i}`,
//   img: 'https://source.unsplash.com/random',
// }));

const PickPosterPage = () => {
  const child = { width: '200px', height: '320px' };
  const parent = { width: '592px', height: '689px' };
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
          <Wrapper style={parent}>
            <HorizontalScroll pageLock={true} reverseScroll={true}>
              <CardGrid>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
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
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;

const CardGrid = styled.div`
  display: grid !important;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  > div {
    margin-right: 20px;
  }
`;

export default PickPosterPage;
