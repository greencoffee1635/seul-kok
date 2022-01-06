import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import { Layout } from '../components/Layout';


import { head_5, sub_4 } from '../shared/textStyle';
import Background from '../components/Background';

const MyPage = () => {
  return (
    <Template>
      <Background />
      <Header page="main" />
      <Layout>
        <Grid width="40rem" is_flex="space-between">
          <Grid margin="0 0 5rem 5rem">
            <Title>구독 관리</Title>
          </Grid>
        </Grid>

        <Grid width="35rem">
          <Grid margin="0 0 0 0">

          <Title>구독 예약</Title>
          <NextOtt>
            <Text>다음달 원하는 OTT를 선택해주세요.</Text>
            <LoginWrapper>
              <LoginForm>

                  <FormButton>
                    <b style={{ color: '#d92f27', textDecoration: 'none' }}>NEXFLIX</b>
                  </FormButton>

                  <FormButton>
                    <b style={{ color: '#f1355c', textDecoration: 'none'}}>WATCHA</b>
                  </FormButton>

                  <FormButton>
                    <b style={{ color: '#ffffff', textDecoration: 'none'}}>Desney+</b>
                  </FormButton>

                  <FormButton>
                    <b style={{ color: '#ffffff', textDecoration: 'none'}}>TVING</b>
                  </FormButton>

              </LoginForm>
            </LoginWrapper>
          </NextOtt>
          {/* <Wrapper></Wrapper> */}
          </Grid>
        </Grid>
      </Layout>
    </Template>
  );
};

const Title = styled.h2`
  ${head_5}
  color: #ffffff;
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Text = styled.p`
  ${sub_4}
  color: #ffffff;
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  max-width: 40rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border: 4px solid gray;
  border-radius: 3px;
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;


const NextOtt = styled.div`

`;

const LoginWrapper = styled.div`

`;

  // margin-top: 5px;
  // display: flex;

const LoginForm = styled.div`

  text-align: center;
  position: absolute;
  display: flex;
  width: 570px;

  div {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

const FormButton = styled.button`
  font-size: 1rem;

  border-radius: 5px;
  border: none;
  float: left;

  margin-right: 3px;

  width: 120px;
  height: 40px;

  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  cursor: pointer;
`;



export default MyPage;
