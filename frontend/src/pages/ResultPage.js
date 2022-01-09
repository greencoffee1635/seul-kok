import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import useMotion from '../utils/useMotion';

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
  // const getParams = props.location.state.contents;
  // console.log('surveyResultData : ', getParams);

  const getParams = JSON.parse(localStorage.getItem('userSurvey')).contents;
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

  const [goToPreview, setGoToPreview] = useState();

  const PreviewClick = (data) => {
    let formData = new FormData();
    // formData.append('survey', data.survey);
    formData.append('ott', data.ott);
    formData.append('title', data.title);
    // console.log(data.title);
    let url = `http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com/api/detail`;
    axios
      .post(url, formData, {
        // timeout: 10000,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        // console.log('ABCDE', res.data.movieinfo);
        localStorage.setItem('movieinfo', JSON.stringify(res.data));
        // props.history.push('/preview2');
      })
      .catch((err) => {
        // console.log('failed', err);
      });
  };

  return (
    <Template>
      <Header page="main" />
      <CenterLayout>
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
                  // onClick={PreviewClick}
                  onClick={() => PreviewClick(movie)}
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

const CardGrid = styled.div`
  display: grid !important;
  display: grid;
  grid-template-rows: 320px 320px;
  grid-template-columns: 230px 230px 230px 230px;
  grid-gap: 1rem;
  justify-content: center;
  cursor: pointer;

  div :hover {
    outline: 3px solid var(--main);
  }
`;

const CardWrapper = styled.div`
  outline: ${(props) => (props.active ? '3px solid var(--main)' : 'none')};
  outline-offset: -2px;
`;

export default ResultPage;
