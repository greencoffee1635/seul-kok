
import React, {useState} from 'react';
import styled from 'styled-components';
import MovieCardData from '../Data/MovieCardData';
// import MovieCardData from '../Data/MovieCardData';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

// const movieCardData = [
//   {
//     id: 0,
//     ott: 'NEXFLIX',
//     title: '지옥',
//     content: '어느 날 기이한 존재로부터 지옥행을 선고받은 사람들. 충격과 두려움에 휩싸인 도시에 대혼란의 시대가 도래한다. 신의 심판을 외치며 세를 확장하려는 종교단체와 진실을 파헤치는 자들의 이야기.',
//   },
//   {
//     id: 1,
//     ott: 'WATCHA',
//     title: 'La La Land',
//     content: '황홀한 사랑, 순수한 희망, 격렬한 열정… 이 곳에서 모든 감정이 폭발한다!',
//   },

//   {
//     id: 2,
//     ott: 'disney+',
//     title: 'The Avengers',
//     content: '인피니티 워 이후 절반만 살아남은 지구 마지막 희망이 된 어벤져스 먼저 떠난 그들을 위해 모든 것을 걸었다! 위대한 어벤져스 운명을 바꿀 최후의 전쟁이 펼쳐진다!',
//   },

//   {
//     id: 3,
//     ott: 'TIVING',
//     title: '환승연애',
//     content: '다양한 이유로 이별한 커플들이 모여 지나간 사랑을 되짚고 새로운 사랑을 찾아나가는 연애 리얼리티',
//   }
// ]

const MovieCard = (props) => {

  let [card, setCard] = useState(MovieCardData);


  function MovieCards(props) {
    return (
      <Card>
        <MovieIntro>
          <p2>{props.card.ott}</p2>
        </MovieIntro>
        <MovieContent>
          <p2>{props.card.title}</p2>
          <p>{props.card.content}</p>
          <MovieButton>미리보기</MovieButton>
        </MovieContent>
      </Card>
    )
  };


  return (
    <MainScetion>

      {
        card.map((a, i)=>{
          return <MovieCards card={a} />
        })
      }

      {/* {
        card.map((a, i)=>{
          return <MovieCards card={card[i]} />
        })
      } */}

      {/* <MovieCards card={card[0]} />
      <MovieCards card={card[1]} />
      <MovieCards card={card[2]} />
      <MovieCards card={card[3]} /> */}

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
  background-color: transparent;
`;


// const Button = styled.button`

//   margin: auto;
//   width: 300px;
//   height: 420px;
//   cursor: pointer;

//   text-align: left;

//   background: linear-gradient(
//     to bottom,
//     rgba(20, 20, 20, 0) 10%,
//     rgba(20, 20, 20, 0.20) 20%,
//     rgba(20, 20, 20, 0.8) 80%,
//     rgba(20, 20, 20, 0.9) 90%,
//     rgba(20, 20, 20, 1) 100%
//   ), url(https://source.unsplash.com/random);
//   background-size: contain;

//   &:hover {
//     background: linear-gradient(
//       to bottom,
//       rgba(216, 14, 27, 0.1) 10%,
//       rgba(216, 14, 27, 0.3) 30%,
//       rgba(242, 39, 62, 0.5) 50%,
//       rgba(242, 39, 62, 0.7) 70%,
//       rgba(242, 39, 62, 1) 100%
//     );
//     background-size: contain;
//     border: 3px solid;
//     border-color: var(--main);
//   };

// `;

const Card = styled.div`

  margin: auto;
  width: 300px;
  height: 420px;
  cursor: pointer;

  text-align: left;

  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0) 10%,
    rgba(20, 20, 20, 0.20) 20%,
    rgba(20, 20, 20, 0.8) 80%,
    rgba(20, 20, 20, 0.9) 90%,
    rgba(20, 20, 20, 1) 100%
  ), url(./Image/image5.jpg);
  background-size: contain;

  &:hover {
    background: linear-gradient(
      to bottom,
      rgba(216, 14, 27, 0.1) 10%,
      rgba(216, 14, 27, 0.3) 30%,
      rgba(242, 39, 62, 0.5) 50%,
      rgba(242, 39, 62, 0.7) 70%,
      rgba(242, 39, 62, 1) 100%
    );
    background-size: contain;
    border: 3px solid;
    border-color: var(--main);
  };

`;



// const MovieWrapper = styled.div`

//   width: 100%;
//   height: 100%;
//   &:hover {
//     background: var(--main);
//     position: absolute;
//     top: 80%;
//     left: 50%;
//     width: 300px;
//     height: 400px;
//     -webkit-translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     -webkit-animation: ${scroll} 2.5s infinite;
//     animation: ${scroll} 2.8s infinite;
//   }
// `;


  // p, p2 {
  //   position: absolute;
  //   top: 80%;
  //   left: 50%;
  //   width: 300px;
  //   height: 400px;
  //   -webkit-translate(-50%, -50%);
  //   transform: translate(-50%, -50%);
  //   -webkit-animation: ${scroll} 2.5s infinite;
  //   animation: ${scroll} 2.8s infinite;
  // }

// const Card = styled.div`

//   margin: auto;
//   width: 300px;
//   height: 420px;

//   text-align: left;

//   background-color: var(--deepdarkred);
//   background-image: url(https://source.unsplash.com/random);
//   background-size: contain;
// `;


const MovieIntro = styled.div`

  margin-left: 1rem;
  margin-top: 1rem;
  color: var(--main);
  font-weight: 500;
`;

const MovieContent = styled.div`

  margin-left: 1rem;
  margin-top: 11rem;
  font-size: 1rem;
  color: #ffffff;

  `;


const MovieButton = styled.button`

  margin-top: 1.3rem auto;

  border: 1px solid;
  border-color: #ffffff;
  border-radius: 0.1em;

  color: #ffffff;
  background-color: transparent;
  opacity: 0.5;

`

export default MovieCard;