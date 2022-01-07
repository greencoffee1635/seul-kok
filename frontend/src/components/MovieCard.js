
import React, {useState} from 'react';
import styled from 'styled-components';
import MovieCardData from '../Data/MovieCardData';
import { Link, useParams } from "react-router-dom";
// import MovieCardData from '../Data/MovieCardData';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";


const MovieCard = (props) => {

  let [card, setCard] = useState(MovieCardData);
  const { history } = props;


  function MovieCards(props) {
    return (
      <Card>
        <MovieIntro>
          <p2>{props.card.ott}</p2>
        </MovieIntro>
        <MovieContent>
          <p2>{props.card.title} <sapn>{props.card.playdate}</sapn> </p2>
          <p>{props.card.content} ... <b>미리보기</b></p>
          {/* <MovieButton>미리보기</MovieButton> */}
        </MovieContent>
      </Card>
    )
  };


  return (
    <MainScetion>

      {/* {
        card.map((carddata, i)=>{
          return <MovieCards card={carddata} />
        })
      } */}

      {/* {
        card.map((a, i)=>{
          return <MovieCards card={card[i]} />
        })
      } */}

      {/* <Link to="/preview/0" style={{textDecoration: 'none'}}><MovieCards card={card[0]} /></Link>
      <Link to="/preview/1" style={{textDecoration: 'none'}}><MovieCards card={card[1]} /></Link>
      <Link to="/preview/2" style={{textDecoration: 'none'}}><MovieCards card={card[2]} /></Link>
      <Link to="/preview/3" style={{textDecoration: 'none'}}><MovieCards card={card[3]} /></Link> */}


      <MovieCards card={card[0]} />
      <MovieCards card={card[1]} />
      <MovieCards card={card[2]} />
      <MovieCards card={card[3]} />




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
  line-height: 23px;

  background: var(--darkred);

  // &:hover {
  //   background: var(--main);
  //   border: 3px solid var(--main);
  // };

`;

// const Card = styled.div`

//   margin: auto;
//   width: 300px;
//   height: 420px;
//   cursor: pointer;

//   text-align: left;
//   line-height: 23px;

//   background: var(--darkred);

//   &:hover {
//     background: var(--main);
//     border: 3px solid var(--main);
//   };

// `;

// &:hover {
//   background: linear-gradient(
//     to bottom,
//     rgba(216, 14, 27, 0.1) 10%,
//     rgba(216, 14, 27, 0.3) 30%,
//     rgba(242, 39, 62, 0.5) 50%,
//     rgba(242, 39, 62, 0.7) 70%,
//     rgba(242, 39, 62, 1) 100%
//   );

const MovieIntro = styled.div`

  margin-left: 1rem;
  margin-top: 2rem;
  color: var(--main);
  font-weight: 500;


`;

const MovieContent = styled.div`

  margin-top: 180px;
  margin-left: 1rem;
  top: 50%;
  font-size: 0.9rem;
  width: 90%;
  height: 180px;
  color: #ffffff;

  p2 {
    font-size: 20px;
  }

  sapn {
    font-family: none;
    font-size: 12px;
  }

  `;


// const MovieButton = styled.button`

//   margin-bottom: 10px;

//   border: 1px solid;
//   border-color: #ffffff;
//   border-radius: 0.1em;

//   color: #ffffff;
//   background-color: transparent;
//   opacity: 0.8;

//   bottom: 0;
// `;

export default MovieCard;