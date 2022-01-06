import React from 'react';
import styled from 'styled-components';

export default function MovieModal() {

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <MovieModalSection>
      <MovieIntro>
          <Preview loop autoPlay>
            <source src={process.env.PUBLIC_URL + `/video/video3.mp4`} type="video/mp4" />
          </Preview>
          <MoiveContent>
            <MovieIntro>
              <OttName>
                <p2>DISNEYPLUS</p2>
              </OttName>
              <p2>Arcane: League of Legends</p2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </MovieIntro>
          </MoiveContent>
      </MovieIntro>
    </MovieModalSection>
  );
}

const MovieModalSection = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  column-gap: 2rem;
  margin: 0 2rem;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 0;
    align-content: center;
  }
`;

const OttName = styled.div`
  `;


const MovieIntro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


const Preview = styled.video`
  width: 100%;
  position: absolute;
`;

const MoiveContent = styled.p`
  padding-top: 0.5rem;
  span {
    color: var(--main);
  }
`;
