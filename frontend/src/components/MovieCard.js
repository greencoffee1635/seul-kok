

import React from 'react';
import styled from 'styled-components';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MovieCard = () => {
  return (
    <MainScetion>
      <Card>
        <MovieIntro>
          <h4>NEXFLIX</h4>
        </MovieIntro>
        <MovieContent>
          <h3>Arcane: League of Legends</h3>
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
          <h4>WATCHA</h4>
        </MovieIntro>
        <MovieContent>
          <h3>Arcane: League of Legends</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <MovieButton>자세히보기</MovieButton>
        </MovieContent>
      </Card>
      <Card>
        <MovieIntro>
          <h4>TVING</h4>
        </MovieIntro>
        <MovieContent>
          <h3>Arcane: League of Legends</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <MovieButton>자세히보기</MovieButton>
        </MovieContent>
      </Card>
      <Card>
        <MovieIntro>
          <h4>DISNEYPLUS</h4>
        </MovieIntro>
        <MovieContent>
          <p>Arcane: League of Legends</p>
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

  background-color: var(--deepdarkred);
  background-image: url(https://source.unsplash.com/random);
  background-size: contain;
`;


const MovieIntro = styled.div`

  margin-left: 1rem;
  color: #ffffff;
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