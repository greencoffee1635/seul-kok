import React  from 'react';
import styled from 'styled-components';


// import { Grid } from '@mui/material';

// components
import Header from '../components/Header';
import useMotion from '../utils/useMotion';
// import Layout from '../components/Layout';


const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MainPage = () => {


  return (

    <MainScreen>
        <MainVideo loop autoPlay>
          <source src={process.env.PUBLIC_URL + `/video/video3.mp4`} type="video/mp4" />
        </MainVideo>

        <Header page="main" />

          <MainItem>
            <p style={{fontSize: '20px', color: '#ffffff'}}><b>액션/아케이드</b></p>
            <p2 style={{fontSize: '40px', color: 'var(--main)'} }>Arcane: League of Legends</p2>
            <p style={{color: '#ffffff'}}>모든 전설엔 시작이 있다. 《리그 오브 레전드》 제작진이 만든 새로운 애니메이션 시리즈 《아케인》. 레전드가 된 두 챔피언과 전운에 가득 뒤덮인 한 도시의 시작을 따라간다.</p>
            <StartButton><span>이달의 OTT 추천받기</span></StartButton>
          </MainItem>


          {/* <Grid width="20rem" is_flex="space-between">
            <Item>

                <p dark {...useMotion('down', 2, 0.5)} >이번 달은<br/> <span style={{color: 'var(--main)'}}>어떤 사이트</span> 를<br/> <span style={{color: 'var(--main)'}}>구독</span>해야할지 <br/> <span style={{color: 'var(--main)'}}>고민</span>되시죠?</p>
                <StartButton><span>추천받기</span></StartButton>

            </Item>
          </Grid> */}
        {/* <img src={process.env.PUBLIC_URL + `/image/image2.jpg`} alt="" /> */}



    </MainScreen>


  );
};



const MainScreen = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: fixed;
`;


const MainVideo = styled.video`
  width: 100%;
  position: absolute;
  `;



const MainItem = styled.div`

  z-index: 999999;
  width: 600px;
  height: 500px;

  top: 450px;
  left: 120px;

  justify-content: left;
  position: absolute;
  display: flex;
  flex-direction: column;

  `;


// const ItemContent = styled.div`
//   margin-top: 65%;
//   p, p2 {
//     color: #ffffff;
//   }
// `
// const ItemTitle = styled.div`
//   font-size: 330%;
//   text-align: right;
//   p, p2 {
//     font-weight: bold;
//     color: #ffffff;
//   }
// `

const StartButton = styled.button`

  text-align: center;
  cusor: pointer;

  width: 13rem;
  height: 3rem;
  margin-top: 20px;

  background: linear-gradient(80deg, #e8384c 0.73%, #b63140 100%);
  border-radius: 50em;
  border: none;

  color: #ffffff;
  font-style: normal;
  font-wight: bold;
  font-size: 1.2rem;
  span {
    font-weight: bold;
  }

  &:hover {
    background: linear-gradient(
      to right,
      var(--main), #5a292f
    );

`


export default MainPage;