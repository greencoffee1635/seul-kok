import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Background from '../components/Background';
// import Template from '../components/Template';

import { CenterLayout } from '../components/Layout';
// import { MovieDummy } from '../data/dummy';
// import { resultDummy } from '../data/resultDummy';

import { head_3, sub_3 } from '../shared/textStyle';

const cards = [...new Array(8)];

const ResultPage = (props) => {
  // const location = useLocation();
  const history = { useHistory };
  const location = useLocation();
  const getParams = props.location.state.contents;
  console.log('surveyResultData : ', getParams);

  const [movieResult, setMovieResult] = useState({});

  const [bCheckedArray, setCheckedArray] = useState(
    Array.from({ length: cards.length }, () => false),
  );

  const activeHandler = (idx) => {
    if (bCheckedArray[idx] === true) {
      return true;
    } else {
      return false;
    }
  };

  // console.log(bCheckedArray);

  const setChecked = (id) => {
    let newArray = [...bCheckedArray];
    newArray[id] = !newArray[id];
    setCheckedArray(newArray);
    // console.log(newArray);
  };

  const [movieCard, setMovieCard] = useState();

  const [genre, setGenre] = useState();

  return (
    <Template>
      <Background />
      <Header page="main" />
      <CenterLayout>
        <Grid>
          <Title>
            <span style={{ color: 'var(--white)' }}>유가연</span>님의 이번달 OTT
            슬콕! 하세요.
          </Title>
        </Grid>

        <Grid>
          <Desc style={{ color: 'var(--main)' }}>
            앉으나 서나&nbsp;
            <span style={{ color: 'var(--white)' }}>{getParams[0].genre}</span>
            &nbsp;생각인&nbsp;<span style={{ color: 'var(--white)' }}>유가연</span>님!
          </Desc>
        </Grid>

        <ChartWrapper>
          <Chart width="30rem" height="30rem"></Chart>
        </ChartWrapper>
        <Grid>
          <Title>____님의 이번달 OTT 슬콕! 하세요.</Title>
        </Grid>

        <CardGrid>
          {getParams.map((movie, index) => {
            return (
              <CardWrapper
                active={activeHandler(index)}
                onClick={() => {
                  setChecked(index);
                }}
              >
                <img
                  src={movie.poster}
                  width="230px"
                  height="320px"
                  alt="cardimg"
                  onClick={() => props.history.push('/preview')}
                  // onClick={()=>history.push}
                />
              </CardWrapper>
            );
          })}
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
  display: grid;
  grid-template-rows: 320px 320px;
  grid-template-columns: 230px 230px 230px 230px;
  /* grid-gap: 18rem 3rem; */
  grid-gap: 1rem;
  justify-content: center;
  cursor: pointer;

  div :hover {
    /* outline: 3px solid var(--main); */
    outline: 3px solid var(--main);
    // outline-offset: px;
  }
`;

const CardWrapper = styled.div`
  outline: ${(props) => (props.active ? '3px solid var(--main)' : 'none')};
  outline-offset: -2px;
`;

export default ResultPage;
