

import React from 'react';
import styled, {keyframes} from 'styled-components';

const MovieCard = () => {
  return (
    <MainScetion>
      <Card>
        <MovieIntro>
          <h4>제작사</h4>
          <h3>영화 이름</h3>
        </MovieIntro>
        <MovieContent>
          <p>줄거리 간략하게 조잘조잘 어쩌고 저쩌고</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </MovieContent>
      </Card>
      <Card>
        <MovieIntro>
          <h4>제작사</h4>
          <h3>영화 이름</h3>
        </MovieIntro>
        <MovieContent>
          <p>줄거리 간략하게 조잘조잘 어쩌고 저쩌고</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </MovieContent>
      </Card>
      <Card>
        <MovieIntro>
          <h4>제작사</h4>
          <h3>영화 이름</h3>
        </MovieIntro>
        <MovieContent>
          <p>줄거리 간략하게 조잘조잘 어쩌고 저쩌고</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </MovieContent>
      </Card>
      <Card>
        <MovieIntro>
          <h4>제작사</h4>
          <h3>영화 이름</h3>
        </MovieIntro>
        <MovieContent>
          <p>줄거리 간략하게 조잘조잘 어쩌고 저쩌고</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </MovieContent>
      </Card>
    </MainScetion>
  )
}

const MainScetion = styled.div`

  margin-top: 500px;
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
  background-color: var(--main);

  text-align: left;


`

const MovieIntro = styled.div`

  margin-left: 1rem;
  font-size:
  color: #ffffff;
`;

const MovieContent = styled.div`

  margin-left: 1rem;
  margin-top: 6rem;
  font-size: 1rem;
  color: #ffffff

  `

export default MovieCard;