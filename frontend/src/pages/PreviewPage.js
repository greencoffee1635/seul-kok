import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import MovieContentdData from '../Data/MovieContentData';

// import { Grid } from '@mui/material';

// components
import Header from '../components/Header';
// import Layout from '../components/Layout';



const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const PreviewPage = (props) => {

  let [movieContent, setmovieContent] = useState(MovieContentdData);

  return (
    <>

    {/* muted */}
    <MainScreen>
        <MainVideo muted loop autoPlay>
          <source src={process.env.PUBLIC_URL + `/video/video4.mp4`} type="video/mp4" />
        </MainVideo>

        <Header page="previewpage" />

          <MovieItem>

            <MovieTitle>
              <p2>{movieContent[0].title}</p2>
            </MovieTitle>

            <MovieItemTitle>
              <p><b>영화 줄거리</b></p>
            </MovieItemTitle>

            <MovieItemIntro>
              <p>{movieContent[0].content}</p>
              <IntroSection>
                <p><b>개봉일</b> {movieContent[0].playdate}</p>
                <p><b>장르</b> {movieContent[0].genre}</p>
                <p><b>출연진</b> {movieContent[0].cast}</p>
                <p><b>상영시간</b> {movieContent[0].time}</p>
              </IntroSection>
            </MovieItemIntro>

            <PictureCardSection>
              <PictureCardTitle>
                <p><b>관련영상</b></p>
              </PictureCardTitle>
              <PictureCardContent>
                <PictureCard></PictureCard>
                <PictureCard></PictureCard>
                <PictureCard></PictureCard>
              </PictureCardContent>
            </PictureCardSection>

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


const MainVideo = styled.video`
  width: 100%;
  position: absolute;
  `;




const MovieItem = styled.div`

margin: 0 auto;

width: 1010px;
top: 90%;
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
  cusor: pointer;

  width: 8rem;
  height: 2.5rem;
  float: right;

  background: transparent;
  border-radius: 12px;
  border: 2px solid var(--main);

  color: var(--main);
  font-style: normal;
  font-wight: bold;
  font-size: 1.2rem;

  &:hover {
    color: #ffffff;
    background: var(--main);
    );

`

// const BackButton = styled.button`

// text-align: center;
// cusor: pointer;

// width: 9rem;
// height: 2.7rem;

// background: linear-gradient(80deg, #e8384c 0.73%, #b63140 100%);
// border-radius: 50em;
// border: none;

// color: #ffffff;
// font-style: normal;
// font-wight: bold;
// font-size: 1.2rem;

// &:hover {
//   color: var(--black);
//   background: linear-gradient(
//     to right,
//     var(--main), #5a292f
//   );

// `

export default PreviewPage;