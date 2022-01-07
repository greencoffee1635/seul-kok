import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';
import axios from 'axios';

// components
import Grid from '../components/Grid';
import Background from '../components/Background';
import Header from '../components/Header';
import { GridLayout } from '../components/Layout';
import { surveyDummy, MovieDummy } from '../data/dummy';
import {
  head_2,
  sub_1,
  sub_2,
  sub_1_mobile,
  sub_2_mobile,
} from '../shared/textStyle';

const questions = [...new Array(4)];
const cards = [...new Array(8)];

const SurveyPage = (props) => {
  // const [posts, setPosts] = useState({});
  // 버튼
  // const [hoverState, setHoverState] = useState(null);
  // const [checkedItems, setCheckedItems] = useState(new Set());


  const [bCheckedArray, setCheckedArray] = useState(Array.from({ length: cards.length }, () => false),);
  // const [selected, setSelected] = useState(0);

  const activeHandler = (idx) => {
    if (bCheckedArray[idx] === true) {
      return true;
    } else {
      return false;
    }
  };

  // console.log(bCheckedArray);

  const setChecked = (id) => {
    let newArray = [...bCheckedArray];
    newArray[id] = !newArray[id];
    setCheckedArray(newArray);
  };


  const [answerList, setAnswerList] = useState(Array.from({ length: questions.length }, () => 0),);
  const [answer, setAnswer] = useState(0)
 
  const handleCheck = (e, index) => {
    let answerArray = {...answerList};
    setAnswer({
      answer: e.target.value,
    });
      if (answer === '1') {
      setAnswerList(answerList.push(answer));
      
    } else if (answer === '2') {
      setAnswerList(answerList.push(answerArray));
  
    } else if (answer === '3') {
      setAnswerList(answerList.push(answerArray));

    } else if (answer === '4') {
      setAnswerList(answerList.push(answerArray));
     
    }
    console.log(e.target.value)
    console.log(answerArray)
  };





  // const handleCheck = (e) => {
  //   let answerArray = [...answerList];
  //   setAnswer({
  //     answer: e.target.value,
  //   });
  //   if (answer === '1') {
  //     setAnswerList(answer.push(e.target.value));
  //     setAnswer('')
  //   } else if (answer === '2') {
  //     setAnswerList(answer.push(e.target.value));
  //     setAnswer('')
  //   } else if (answer === '3') {
  //     setAnswerList(answer.push(e.target.value));
  //     setAnswer('')
  //   } else if (answer === '4') {
  //     setAnswerList(answer.push(e.target.value));
  //     setAnswer('')
  //   }
  //   setAnswerList(answerArray);
  //   // setAnswerList(answerList.push(answer))
  //   // console.log(e.target.value);
  //   // setAnswerList(e.target.value)
  //   // setAnswer(answer)
  //   console.log(e.target.value)
  //   console.log(answerArray)
  // };



   // const activeSurveyHandler = (idx) => {
  //   if (answerList[idx] === true) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };





  const handleClick = (data) => {
    // setIdFromButtonClick(id);
    let formData = new FormData();
    formData.append('survey', data.survey);
    // formData.append('pwd', this.userPass);
    let url = `http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com:5000/question`;
    axios
      .post(url, formData, {
        // timeout: 10000,
        headers: {
          'Content-Type': `multipart/form-data`,
        },
      })
      .then((res) => {
        console.log('res : ', res.data.mostOTT);
      })
      .catch((error) => {
        console.log('failed', error);
      });
  };

  const parent = { width: '40rem', height: '37rem', margin: '3rem 12rem' };
  const child = { width: '40rem', height: '35rem' };
  return (
    <Template>
      <Background />
      <Header />
      <GridLayout>
        <GridWrapper>
          <TitleWrapper>
            <Title>
              <span style={{ color: 'var(--main)' }}>주어진 상황</span>에 맞게
              <br />
              <span style={{ color: 'var(--main)' }}>선택</span>하고
              <br />
              <span style={{ color: 'var(--main)' }}>컨텐츠</span>에 대해서
              <br />
              알려주세요.
            </Title>
          </TitleWrapper>
      {/* <button>
       등록하기
      </button> */}
      
   
          <Grid>
            {/* <Scroll> */}
            <ScrollWrapper style={parent}>
              <HorizontalScroll
                // pageLock={true}
                // reverseScroll={true}
                style={{ overflow: 'scroll hidden' }}
                config={{ stiffness: 100, damping: 50 }}
                className={'scrollbar'}
                // animValues={int}
              >
                {surveyDummy[1].map((survey, index) => {
                  return (
                    <SurveyWrapper style={child}>
                      <Text>{survey.question}</Text>
                      {/* <AnswerWrapper> */}
                      <Answer
                        value="1"
                        // active={activeSurveyHandler(index)}
                        // onClick={() => {
                        //   setSurveyChecked(index);
                        // }}
                        // onClick={handleCheck}
                        onClick={handleCheck}
                        >
                        {survey.answer1}
                      </Answer>
                      <Answer
                        value="2"
                        // active={activeSurveyHandler(index)}
                        // onClick={() => {
                        //   setSurveyChecked(index);
                        // }}
                       
                  // onClick={handleCheck}
                  onClick={handleCheck}
                      >
                        {survey.answer2}
                      </Answer>
                      <Answer
                        value="3"
                        // active={activeSurveyHandler(index)}
                        // onClick={() => {
                        //   setSurveyChecked(index);
                        // }}
                        // onClick={handleCheck}
                        onClick={handleCheck}
                      >
                        {survey.answer3}
                      </Answer>
                      <Answer
                        value="4"
                        // active={activeSurveyHandler(index)}
                        // onClick={() => {
                        //   setSurveyChecked(index);
                        // }}
                        // onClick={handleCheck}
                        onClick={handleCheck}
                      >
                        {survey.answer4}
                      </Answer>
                      {/* </AnswerWrapper> */}
                    </SurveyWrapper>
                  );
                })}
              </HorizontalScroll>
            </ScrollWrapper>
            {/* </Scroll> */}
          </Grid>

          {/* <Grid width="30rem"> */}
          <TitleWrapper>
            <Title>
              그동안
              <span style={{ color: 'var(--main)' }}>
                즐겁게 본 <br />
                컨텐츠
              </span>
              를
              <span style={{ color: 'var(--main)' }}>
                <br />
                선택
              </span>
              해주세요.
              <br /> (최대 3개)
            </Title>
          </TitleWrapper>
          {/* </Grid> */}

          <Grid>
            <Wrapper>
              <CardGrid>
                {MovieDummy[1].map((movies, index) => {
                  return (
                    <CardWrapper
                      active={activeHandler(index)}
                      onClick={() => {
                        setChecked(index);
                      }}
                    >
                      <img
                        src={movies.image}
                        width="230px"
                        height="320px"
                        alt="cardimg"
                      />
                    </CardWrapper>
                  );
                })}
              </CardGrid>
            </Wrapper>
          </Grid>
          {/* <Grid>
            <div>
              <button type="button" onClick={handleClick}>
                Fetch Test
              </button>
              <div>{posts.title}</div>
            </div>
          </Grid> */}
        </GridWrapper>
      </GridLayout>
      <Button type="button" onClick={handleClick}>
        결과
      </Button>
    </Template>
  );
};

const Button = styled.button``;

const Template = styled.main`
  width: 100%;
  min-height: calc(200vh - 100px);
`;

const GridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 35rem 61rem;
  grid-template-rows: 35rem 35rem 5rem;
  grid-gap: 18rem 3rem;
  ${({ theme }) => theme.device.tablet} {
    grid-gap: 3rem 3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 9.6rem;
  ${({ theme }) => theme.device.tablet} {
    margin-left: 6rem;
  }
  ${({ theme }) => theme.device.mobile} {
    margin-left: 3rem;
  }
`;

const Title = styled.h2`
  ${head_2}
  color: var(--white);
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Text = styled.p`
  ${sub_1}
  color: var(--white);
  width: 39rem;
  ${({ theme }) => theme.device.mobile} {
    ${sub_1_mobile}/* max-width: 35rem; */
  }
`;

const ScrollWrapper = styled.div`
  /* max-width: 40rem; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;

  .scrollbar {
    &::-webkit-scrollbar {
      height: 8px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
    }
    width: 80%;
  }
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;

const SurveyWrapper = styled.section`
  flex-direction: column;
  margin-right: 2rem;
  justify-content: center;
`;

const Answer = styled.button`
  ${sub_2}
  width: 39rem;
  height: 3.2rem;
  margin-top: 1rem;
  cursor: pointer;

  background: linear-gradient(80deg, var(--main) 0.73%, var(--darkred) 100%);
  color: var(--white);
  border-radius: 13px;
  border: none;
  ${({ theme }) => theme.device.mobile} {
    ${sub_2_mobile}
    width: 17rem;
    height: 4rem;
  }
`;

// const Scroll = styled.div`
//   overflow-y: scroll;
//   &::-webkit-scrollbar {
//     width: 6px;
//     border-radius: 6px;
//     /* background: rgba(255, 255, 255, 0.4); */
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: rgba(0, 0, 0, 0.3);
//     border-radius: 2px;
//   }
//   height: 90%;
//   margin: 0 auto;
// `;

const Wrapper = styled.div`
  /* max-width: 61rem; */
`;

const CardGrid = styled.div`
  display: grid !important;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  grid-gap: 1rem;
  cursor: pointer;

  div :hover {
    outline: 3px solid var(--main);
    // outline-offset: px;
  }
`;

const CardWrapper = styled.div`
  outline: ${(props) => (props.active ? '3px solid var(--main)' : 'none')};
  outline-offset: -2px;
`;

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

const Arrow = styled.div`
  /* padding-top: 5rem; */
  display: flex;
  flex-direction: row;
  justify-content: center !important;
  cursor: pointer;
  span {
    width: 40px;
    height: 40px;
    border-left: 2px solid rgba(242, 38, 62, 0.41);
    border-bottom: 2px solid rgba(242, 38, 62, 0.41);
    transform: rotate(-45deg);
    animation: ${scroll} 2.8s infinite;
    /* border-radius: 2px 2px 2px 0;
    border-bottom: 40px solid var(--main);
    border-right: 40px solid transparent; */
  }
`;

export default SurveyPage;
