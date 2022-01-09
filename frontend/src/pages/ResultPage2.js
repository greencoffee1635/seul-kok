import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import axios from 'axios';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Background from '../components/Background';
import useMotion from '../utils/useMotion';
// import Template from '../components/Template';

import { CenterLayout } from '../components/Layout';
// import { MovieDummy } from '../data/dummy';
// import { resultDummy } from '../data/resultDummy';

import { head_3, sub_3 } from '../shared/textStyle';



const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";


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

  return (
    <Template>
      <Background />
      <Header page="main" />
      <CenterLayout>
        <Grid>
          <ResultContent>
            <p dark {...useMotion('down', 1, 0.2)} style={{fontSize: '40px', color: '#ffffff'}}><b>결과</b>가 궁금하시죠?</p>
            <Title><span style={{color: 'var(--main)'}}>유가연</span>님의 이번달 <span style={{color: 'var(--main)'}}> 슬콕 결과</span>는!</Title>
          </ResultContent>
        </Grid>


          <Desc style={{ color: '#ffffff', fontSize: '23px' }}>
            앉으나 서나&nbsp;<b> 드라마 </b> 생각 중인 <span style={{color: 'var(--main)'}}><b>유가연</b></span>님!
          </Desc>



        <ChartWrapper>
          {/* <Chart width="30rem" height="30rem"></Chart> */}

          <p style={{color: '#ffffff', fontSzie: '20px'}}><b>유가연</b>님은 <b style={{color: 'var(--main)'}}>‘미국’</b> 작품을 가장 종하하시는 군요! < br />
            미국 작품이 많은 순서는 <b style={{color: 'var(--main)'}}>WATCHA</b>&gt;Tving&gt;NETFLIX&gt;Disney+ 예요!</p>
          <img alt="" src={process.env.PUBLIC_URL + `/result/result.png`} />

            <p style={{color: '#ffffff', fontSzie: '20px'}}><b>유가연</b>님은 <b style={{color: 'var(--main)'}}>‘드라마’</b> 를 좋아하시는군요! < br />
            드라마와 액션 장르 보유 비중 순위는 <b style={{color: 'var(--main)'}}>Tving</b>&gt;WATCHA&gt;NETFLIX&gt;Disney+ 예요!</p>
            <img alt="" src={process.env.PUBLIC_URL + `/result/result2.png`} />

            <p style={{color: '#ffffff', fontSzie: '20px'}}><b>유가연</b>님은 <b style={{color: 'var(--main)'}}>‘영화’</b> 를 더 좋아하시는군요! < br />
            영화 비율은 <b style={{color: 'var(--main)'}}>Tving</b>&gt;WATCHA&gt;Disney+&gt;NETFLIX 순으로 높아요!</p>
            <img alt="" src={process.env.PUBLIC_URL + `/result/result3.png`} />


            <ResultText>
              <p>지금까지 <b style={{color:'var(--main)'}}>넷플릭스, 왓챠, 디즈니플러스, 티빙</b>을 총 <b style={{color:'var(--main)'}}>14,809분동안</b> 시청했어요! <br />
                환산하면 10일 6시간 49분!<br />
                2022년 최저임금을 기준으로 <b style={{color:'var(--main)'}}>2,260,840원</b>을 벌 수 있는 시간이에요! <br />
                컵라면은 <b style={{color:'var(--main)'}}>4,936개</b>를 끓일 수 있는 시간이었네요!</p>
            </ResultText>

        </ChartWrapper>
        <Grid>
          <Title><span style={{color: 'var(--main)'}}>유가연</span>님의 이번달 <span style={{color: 'var(--main)'}}>가장 좋아할만한 컨텐츠</span></Title>
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
  color: #ffffff;
  display: flex;
  /* text-align: center; */
  justify-content: center;
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;


const ResultContent = styled.div`
  justify-content: center;
`;

const Desc = styled.p`
  display: flex;
  justify-content: center;
`;

const ChartWrapper = styled.div`

  align-items: center;
  left: 50%;

  img {
    width: 800px;
    display: flex;
  }
`;


const ChartImg = styled.div`
  display: flex;
  width: 300px;
`;

const ResultText = styled.div`
  font-size: 30px;
  color: #ffffff;
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
