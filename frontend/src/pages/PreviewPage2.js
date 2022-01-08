import React, {useState, useMemo} from 'react';
import styled, {keyframes} from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import MovieContentdData from '../data/MovieContentData';

// import { Grid } from '@mui/material';

// components
import Header from '../components/Header';
import useMotion from '../utils/useMotion';


// import Layout from '../components/Layout';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const PreviewPage2 = (props) => {

  let { id } = useParams();
  let [movieContent, setmovieContent] = useState(MovieContentdData);


  return (
    <>

    <MainScreen>

        <Header page="previewpage2" />

          {/* <MainContent>
            <p dark {...useMotion('down', 1, 0.2)}>이번달 <b>추천 컨텐츠</b> 입니다. <br/></p>
          </MainContent> */}

          <MovieItem dark {...useMotion('down', 1, 0.3)}>

            <MovieTitle>
              <p2>{movieContent[id].title}<sapn>&emsp;{movieContent[id].keyword}</sapn></p2>
            </MovieTitle>

            <MovieItemTitle>
              <p><b>영화 줄거리</b></p>
            </MovieItemTitle>

            <MovieItemIntro>
              <p>{movieContent[id].content}</p>
              <IntroSection>
                <p><b>개봉일</b> {movieContent[id].playdate}</p>
                <p><b>장르</b> {movieContent[id].genre}</p>
                <p><b>출연진</b> {movieContent[id].cast}</p>
                <p><b>상영시간</b> {movieContent[id].time}</p>
              </IntroSection>
            </MovieItemIntro>

            {/* <PictureCardSection>
              <PictureCardTitle>
                <p><b>관련영상</b></p>
              </PictureCardTitle>
              <PictureCardContent>
                <PictureCard></PictureCard>
                <PictureCard></PictureCard>
                <PictureCard></PictureCard>
              </PictureCardContent>
            </PictureCardSection> */}

            <Link to="/main" style={{textDecoration: 'none'}}>
              <BackButton><b>뒤로가기</b></BackButton>
            </Link>
          </MovieItem>


    </MainScreen>

  </>


  );
};




const scroll = keyframes`
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
`;

const MainScreen = styled.div`
  width: 100%;
  height: 230vh;
  background-color: black;
  display: flex;


`;


const MainContent = styled.div`
  font-size: 2.8rem;
  line-height: 3.8rem;
  margin-top: 15%;
  margin-left: 15%;
  color: #ffffff;
  margin-bottom: 20px;
  p2 {
    font-size: 3.6rem;
    margin-top: 5px;
}
`;



const MovieItem = styled.div`

margin: 0 auto;

width: 1010px;
top: 20%;
left: 15%;

text-align: left;
position: absolute;


  span {
    b {
      color: var(--main);
    }
  };
`;


const MovieTitle = styled.p`
  font-size: 45px;
  color: var(--main);

  sapn {
    color: #ffffff;
    font-family: normal;
    font-size: 20px;
  }
`;

const MovieItemTitle = styled.p`
  font-size: 30px;
  color: #ffffff;
`;

const MovieItemIntro = styled.p`
  color: #ffffff;
`;

const IntroSection = styled.div`
  width: 1010px;
  margin-top: 50px;
  b {
    color: var(--main);
  }
`;



const PictureCardSection = styled.div`

  margin-top: 100px;
  width: 1010px;
  height: 400px;

  justify-content: space-between;

  `;

const PictureCardTitle = styled.p`
  font-size: 30px;
  color: #ffffff;
`;


const PictureCardContent = styled.div`
  display: flex;
  cursor: pointer;
`;


  const PictureCard = styled.div`

  margin: auto;
  width: 328px;
  height: 230px;
  background-color: var(--deepdarkred);
  display: flex;

  &:hover {
    border: 3px solid;
    border-color: var(--main);
  `;


  const BackButton = styled.button`

  text-align: center;
  cursor: pointer;

  width: 8rem;
  height: 2.5rem;
  float: right;

  margin-top: 50px;

  background: transparent;
  border-radius: 12px;
  border: 2px solid var(--main);

  color: var(--main);
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color: #ffffff;
    background: var(--main);
    );

`


export default PreviewPage2;