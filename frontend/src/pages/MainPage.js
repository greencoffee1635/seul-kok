import React from 'react';
import styled from 'styled-components';

import { Grid } from '@mui/material';

// components
import Header from '../components/Header';
import useMotion from '../utils/useMotion';
// import Layout from '../components/Layout';


const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MainPage = (props) => {
  return (
    <SectionWrapper>
      <Header page="main" />
        <Grid container spacing={110} columns={12}>
          <Grid item xs={4}>
            <Item>
              <ItemContent>
                <p style={{fontSize: '20px'}}><b>액션/아케이드</b></p>
                <p2 style={{fontSize: '40px', color: 'var(--main)'} }>Arcane: League of Legends</p2>
                <p>모든 전설엔 시작이 있다. 《리그 오브 레전드》 제작진이 만든 새로운 애니메이션 시리즈 《아케인》. 레전드가 된 두 챔피언과 전운에 가득 뒤덮인 한 도시의 시작을 따라간다.</p>
              </ItemContent>
            </Item>
          </Grid>

          <Grid item xs={8}>
            <Item>
              <ItemTitle>
                {/* <p2 dark {...useMotion('down', 1, 0.2)}>이번 달은</p2>
                <p2 dark {...useMotion('down', 1, 0.2)}>
                  <span>style={{color: 'var(--main)'}}어떤 사이트</span>를
                </p2>
                <p2>
                  <span style={{color: 'var(--main)'}}>구독</span> 해야할지
                </p2>
                <p2 dark {...useMotion('down', 1, 0.2)}>
                  <span style={{color: 'var(--main)'}}>고민</span>되시죠?
                </p2> */}
                 <p dark {...useMotion('down', 2, 0.5)} >이번 달은<br/> <span style={{color: 'var(--main)'}}>어떤 사이트</span> 를<br/> <span style={{color: 'var(--main)'}}>구독</span>해야할지 <br/> <span style={{color: 'var(--main)'}}>고민</span>되시죠?</p>
                 <StartButton><span>추천받기</span></StartButton>


                 {/* <> //고민중인 스타일
                  <p3 dark {...useMotion('down', 2, 0.5)} >이번 달은<br/> <span style={{color: 'var(--main)'}}>어떤 사이트</span>를 </p3> <br/>
                  <p2 dark {...useMotion('down', 2, 0.5)} ><span style={{color: 'var(--main)'}}>구독</span>해야할지 <br/> <span style={{color: 'var(--main)'}}>고민</span>되시죠?</p2> <br/>
                </>
                 <StartButton><span>추천받기</span></StartButton> */}


              </ItemTitle>
            </Item>
          </Grid>
        </Grid>
      <img src={process.env.PUBLIC_URL + `/image/image2.jpg`} alt="" />
    </SectionWrapper>
  );
};


const SectionWrapper = styled.div`
  background: var(--black);
  width: 100%;
  height: 100vh;
  `;


const Item = styled.div`
  background: null;
  position: absolute;

  width: 600px;
  height: 500px;

  margin-top: 250px;
  margin-left: 163px;

  `;

  // width: 49%;

const ItemContent = styled.div`
  margin-top: 65%;
  p, p2 {
    color: #ffffff;
  }
`


const ItemTitle = styled.div`
  font-size: 330%;
  text-align: right;
  p, p2 {
    font-weight: bold;
    color: #ffffff;
  }
`

const StartButton = styled.button`
  display: inline;
  text-align: center;
  cusor: pointer;

  width: 7.5rem;
  height: 3.2rem;

  background: linear-gradient(80deg, #e8384c 0.73%, #b63140 100%);
  border-radius: 50em;
  border: none;

  color: #ffffff;
  font-style: normal;
  font-wight: bold;
  font-size: 1.4rem;
  &:hover {
    color: #671d25;
  }
  span {
    font-weight: bold;
  }

`


export default MainPage;