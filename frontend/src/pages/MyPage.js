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
            <Title>내구독</Title>
              <SubsOtt>
                <Text>현재 슬기롭게 콕! 사용 중이시네요</Text>
                <OttWrapper>
                  <SubsForm>
                      <DateForm>
                        <p><b style={{ color: '#d92f27', textDecoration: 'none' }}>NEXFLIX</b><span>&emsp;<b></b>2022년 2월 10일까지</span></p>
                      </DateForm>
                      <CurrentSubForm>
                        <p><b style={{ color: 'var(--main)', textDecoration: 'none' }}>이번구독</b></p>
                      </CurrentSubForm>
                      <NextSubForm>
                        <p><b style={{ color: 'var(--main)', textDecoration: 'none' }}>다음구독</b></p>
                      </NextSubForm>
                  </SubsForm>
                </OttWrapper>
              </SubsOtt>
          </Grid>
        </Grid>

        <Grid width="35rem">
          <Grid margin="0 0 0 0">

            <Title>구독 예약</Title>
              <NextOtt>
                <>
                  <Text>다음달 원하는 <b>OTT</b>를 선택해주세요.</Text>
                  <OttWrapper>
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
                  </OttWrapper>
                </>
                <SubSetion>
                  <Text>원하는 <b>구독기간</b>를 선택해주세요.</Text>
                    <DateWrapper1>
                      <LoginForm>
                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none' }}>1개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>2개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>3개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>4개월</b>
                          </FormButton>
                      </LoginForm>
                    </DateWrapper1>
                    <DateWrapper2>
                      <LoginForm>
                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none' }}>5개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>6개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>7개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>8개월</b>
                          </FormButton>
                      </LoginForm>
                    </DateWrapper2>
                    <DateWrapper3>
                      <LoginForm>
                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none' }}>9개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>10개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>11개월</b>
                          </FormButton>

                          <FormButton>
                            <b style={{ color: '#ffffff', textDecoration: 'none'}}>12개월</b>
                          </FormButton>
                      </LoginForm>
                    </DateWrapper3>
                </SubSetion>
              </NextOtt>

          {/* <Title>구독 예약</Title>
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
          </NextOtt> */}

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

const SubSetion = styled.div`
  margin-top: 45px;
`;

const SubsOtt = styled.div`

`;

const NextOtt = styled.div`

`;

const OttWrapper = styled.div`

`;

const DateWrapper1 = styled.div`

`;

const DateWrapper2 = styled.div`
  margin-top: 10px;
`;

const DateWrapper3 = styled.div`
margin-top: 10px;
`;

  // margin-top: 5px;
  // display: flex;

const SubsForm = styled.div`

  text-align: center;
  width: 570px;

  div {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

const DateForm = styled.div`

  border-radius: 5px;
  float: left;

  text-align: left;

  margin-right: 3px;

  width: 460px;
  height: 40px;

  background-color: rgba(255, 255, 255, 0.1);
  border: 1px dotted var(--main);
  color: #ffffff;

  p {
    margin-left: 20px;
  }
`;

const CurrentSubForm = styled.div`

  border-radius: 5px;
  float: left;
  display: felx;

  text-align: left;

  margin-right: 10px;

  width: 225px;
  height: 200px;

  background-color: rgba(255, 255, 255, 0.1);
  border: 1px dotted var(--main);
  color: #ffffff;

  p {
    margin-left: 20px;
  }
`;

const NextSubForm = styled.div`

  border-radius: 5px;
  float: left;

  text-align: left;

  margin-right: 3px;

  width: 225px;
  height: 200px;

  background-color: rgba(255, 255, 255, 0.1);
  border: 1px dotted var(--main);
  color: #ffffff;

  p {
    margin-left: 20px;
  }
`;


const LoginForm = styled.div`

  text-align: center;
  display: flex;
  width: 570px;

  div {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

// position: absolute;

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

  &:hover {
    color: #ffffff;
    border: 2px solid var(--main);
  }
`;



export default MyPage;
