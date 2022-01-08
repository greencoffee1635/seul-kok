import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Background from '../components/Background';
// import Template from '../components/Template';

import { CenterLayout } from '../components/Layout';
import { MovieDummy } from '../data/dummy';
import { resultDummy } from '../data/resultDummy';

import { head_3, sub_3 } from '../shared/textStyle';

// import {useLocation} from "react-router";

const cards = [...new Array(8)];

const ResultPage = (props) => {
  // const location = useLocation();
  const history = { useHistory };
  // const parent = { width: '40rem', height: '37rem', margin: '3rem 12rem' };
  // const child = { width: '40rem', height: '35rem' };
  const [movieResult, setMovieResult] = useState({});

  const [bCheckedArray, setCheckedArray] = useState(
    Array.from({ length: cards.length }, () => false),
  );
  // const [selected, setSelected] = useState(0);

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
    console.log(newArray);
  };

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  // const handleClick = (data) => {
  //   // setIdFromButtonClick(id);
  //   let formData = new FormData();
  //   formData.append('survey', data.survey);
  //   // formData.append('survey', surveyResult);
  //   // console.log(surveyResult);
  //   // formData.append('pwd', this.userPasss);
  //   let url = `http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com:5000/survey`;
  //   // http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com/api/survey
  //   axios
  //     .post(url, formData, {
  //       // timeout: 10000,
  //       headers: {
  //         'Content-Type': `multipart/form-data`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log('res : ', res.data.mostOTT);
  //     })
  //     .catch((error) => {
  //       console.log('failed', error);
  //     });
  //     props.history.push('/result');
  //     // setLoading(false)
  //     // setLoading(true)
  // };

  const [movieCard, setMovieCard] = useState();

  useEffect((data) => {
    let url = `http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com/api/surveyresult`;
    axios
      .get(url, {
        // timeout: 10000,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('response : ', response.data.mostOTT);
        setMovieCard(response.data.contents)
      })
      .catch((error) => {
        console.log('failed', error);
      });
  });
  
// 설문(question, answer) 제목 오티티종류 포스터
  // let url = `http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com/api/surveyopen`;
  // axios
  //   .get(url, {
  //     timeout: 10000,
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   })
  //   .then((response) => {
  //     console.log('response : ', response.data.mostOTT);
  //   })
  //   .catch((error) => {
  //     console.log('failed', error);
  //   });

  // const getRealTime = useCallback(async () => {
  //   const res = await api.menu.getMenu(id);
  //   console.log(res);
  //   setMenu(() => {
  //     const newMenu = [...res.data];
  //     return newMenu;
  //   });
  //   //eslint-disable-next-line
  // }, [id]);

  // useEffect(() => {
  //   getRealTime();
  //   //eslint-disable-next-line
  // }, []);

  //   class Menu {
  //     async getMenu(id) {
  //         const res = axios.get('/food/menu', {
  //             params: {
  //                 kindsID: id,
  //             },
  //         });
  //         return res;
  //     }
  // }

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
          {movieCard.map((index) => {
            return (
              <CardWrapper
                active={activeHandler(index)}
                onClick={() => {
                  setChecked(index);
                }}
              >
                <img
                  src={movieCard.poster}
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
        {/* <Card>
        {
        card.map((carddata, i)=>{
          return <MovieCards card={carddata}/>
        })
      }
        </Card> */}
      </CenterLayout>
    </Template>
  );
};

// const Card = styled.div`
//   margin: auto;
//   width: 300px;
//   height: 420px;
//   cursor: pointer;

//   text-align: left;
//   line-height: 23px;

//   position: fixed;
//   background-image: url(`./Image/image5`);
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;

// `;

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
  /* grid-template-rows: auto auto; */
  /* grid-auto-flow: column; */
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
