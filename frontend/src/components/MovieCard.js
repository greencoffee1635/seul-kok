

import React from 'react';
import styled from 'styled-components';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MovieCard = () => {
  return (
    <MainScetion>
      <Card>
        <MovieIntro>
          <p2>NEXFLIX</p2>
        </MovieIntro>
        <MovieContent>
          <p2>Arcane: League of Legends</p2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <MovieButton>자세히보기</MovieButton>
        </MovieContent>
        {/* <img
          src="https://source.unsplash.com/random"
          alt="cardimg"
        /> */}
      </Card>
      <Card>
        <MovieIntro>
          <p2>WATCHA</p2>
        </MovieIntro>
        <MovieContent>
          <p2>Arcane: League of Legends</p2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <MovieButton>자세히보기</MovieButton>
        </MovieContent>
      </Card>
      <Card>
        <MovieIntro>
          <p2>TVING</p2>
        </MovieIntro>
        <MovieContent>
          <p2>Arcane: League of Legends</p2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <MovieButton>자세히보기</MovieButton>
        </MovieContent>
      </Card>
      <Card>
        <MovieIntro>
          <p2>DISNEYPLUS</p2>
        </MovieIntro>
        <MovieContent>
          <p2>Arcane: League of Legends</p2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <MovieButton>자세히보기</MovieButton>
        </MovieContent>
      </Card>
    </MainScetion>
  )
}

const MainScetion = styled.div`

  margin-top: 300px;
  margin: auto;

  width: 85%;
  height: 500px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: null;
`;

const Card = styled.div`

  margin: auto;
  width: 300px;
  height: 420px;

  text-align: left;

  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0) 10%,
    rgba(20, 20, 20, 0.20) 20%,
    rgba(20, 20, 20, 0.8) 80%,
    rgba(20, 20, 20, 0.9) 90%,
    rgba(20, 20, 20, 1) 100%
  ), url(https://source.unsplash.com/random);
background-size: contain;
`;

// const Card = styled.div`

//   margin: auto;
//   width: 300px;
//   height: 420px;

//   text-align: left;

//   background-color: var(--deepdarkred);
//   background-image: url(https://source.unsplash.com/random);
//   background-size: contain;
// `;


const MovieIntro = styled.div`

  margin-left: 1rem;
  margin-top: 1rem;
  color: var(--main);
  font-weight: 500;
`;

const MovieContent = styled.div`

  margin-left: 1rem;
  margin-top: 11rem;
  font-size: 1rem;
  color: #ffffff

  `


const MovieButton = styled.button`

  margin-top: 1rem auto;
  border: 1px solid;
  border-color: #ffffff;
  color: #ffffff;
  background-color: transparent;

`

export default MovieCard;