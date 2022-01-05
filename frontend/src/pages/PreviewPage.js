import React from 'react';
import styled, {keyframes} from 'styled-components';

// import { Grid } from '@mui/material';

// components
import MainHeader from '../components/MainHeader';


// import Layout from '../components/Layout';


const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const PreviewPage = () => {

  return (
    <>

    <MainScreen>
        <MainVideo loop autoPlay>
          <source src={process.env.PUBLIC_URL + `/video/video3.mp4`} type="video/mp4" />
        </MainVideo>

        <MainHeader page="previewpage" />

          <MovieItem>

            <MovieTitle>
              <p2>Arcane: League of Legends</p2>
            </MovieTitle>

            <MovieItemTitle>
              <p><b>영화 줄거리</b></p>
            </MovieItemTitle>

            <MovieItemIntro>
              <p>모든 전설엔 시작이 있다. 《리그 오브 레전드》 제작진이 만든 새로운 애니메이션 시리즈 《아케인》. 레전드가 된 두 챔피언과 전운에 가득 뒤덮인 한 도시의 시작을 따라간다.</p>
              <IntroSection>
                <p><b>개봉일</b> 2021년 11월 7일</p>
                <p><b>장르</b> 아케이드</p>
                <p><b>출연진</b> 징크스, 바이, 케이틀린, 제이스 등</p>
                <p><b>상영시간</b> 에피소드 1~7편, 총 6시간 45분</p>
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

          </MovieItem>


          <MovieContent>

          </MovieContent>


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
  height: 1000vh;
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
  height: 700px;

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
  background-color: var(--main);

  display: flex;
  `;




//   const ScrollImage = styled.div`

//   width: 100%;
//   align-items: center;

//   span {
//     position: absolute;
//     top: 88%;
//     left: 50%;
//     width: 40px;
//     height: 40px;
//     margin-left: -12px;
//     border-left: 2px solid rgba(242, 38, 62, 0.41);
//     border-bottom: 2px solid rgba(242, 38, 62, 0.41);
//     -webkit-transform: rotate(-45deg);
//     transform: rotate(-45deg);
//     -webkit-animation: ${scroll} 2.5s infinite;
//     animation: ${scroll} 2.8s infinite;
//     box-sizing: border-box;
// `;


const MovieContent = styled.div`
  width:
`;


export default PreviewPage;