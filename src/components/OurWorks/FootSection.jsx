import React from "react";
import styled from "styled-components";

// Contenitore padre che gestisce i componenti
const ContainerSection = styled.div`
  position: relative;
  height: 20vh; /* Altezza adattabile */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Gli elementi sono disposti in fila */
  margin-bottom: 5%; /* Spazio tra il contenitore e il footer */
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column; /* Disposizione a colonna per schermi piccoli */
    height: auto;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 769px) {
    width: 100%;
    justify-content: end;
    align-items: end;
  }
`;

// Paragrafo con posizione relativa all'interno del contenitore padre
const Paragraph = styled.p`
  color: #000;
  text-align: justify;
  margin: -4vh; /* Spazio tra il paragrafo e il bottone */

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
    padding: 0 1vh;

    margin: 1rem; /* Spazio tra il paragrafo e il bottone */
  }
  @media (min-width: 769px) {
    width: 60%;
    font-size: 1.3rem;
    text-align: start;
    margin-right: 2vh;
  }
`;
const ButtonLink = styled.a`
  background-color: #ffc300;
  color: #000;
  font-size: 1.5rem;
  padding: 3vh 5vh;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  font-family: "Bebas Neue", sans-serif;
  box-shadow: 2px 2px 5px #000; /* Ombra */
  display: inline-block; /* Permette al link di comportarsi come un bottone */

  &:hover {
    background-color: #000;
    color: #ffc300 !important;
    transform: translateX(-40%) translateY(50%) scale(1.2);
  }

  @media (max-width: 768px) {
    padding: 20px 40px;
    margin-bottom: 20px; /* Spazio tra il bottone e il footer */
    transform: translateX(10%) translateY(50%) scale(1.2) !important;
    font-size: 1.3rem;
  }
  @media (min-width: 769px) {
    transform: translateX(-40%) translateY(50%);
  }
`;

// // Bottone con posizione relativa all'interno del contenitore padre
// const Button = styled.button`
//   height: 50px;
//   width: 100px;

//   background-color: #ffc300;
//   color: #000;
//   font-size: 1rem;
//   padding: 2vh 4vh;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   text-align: center;
//   font-family: "Bebas Neue", sans-serif;
//   box-shadow: 2px 2px 5px #000; /* Ombra */

//   &:hover {
//     background-color: #000;
//     color: #ffc300 !important;
//     transform: scale(1.1); /* Ingrandisci senza spostare gli altri elementi */
//   }

//   @media (max-width: 768px) {
//     width: 60%; /* Bottone più largo su schermi piccoli */
//     padding: 2vh 4vh;
//     font-size: 1rem;
//   }
//   @media (min-width: 769px) {
//     margin-right: 2%;
//   }
// `;
// const AncorTag = styled.a`

//   transform: translateX(-30%) translateY(40%);
//   text-decoration: none;
//   color: #000;
//   &:hover {
//     color: #ffc300;
//   }
// `;

const FootSection = () => {
  return (
    <ContainerSection>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde animi
        ratione sunt nemo dolore! Quae, optio? Nostrum quae iure ducimus?
        Molestiae magnam consectetur placeat odit nemo non vel necessitatibus
        animi?
      </Paragraph>
      <ButtonLink
        href="https://www.youtube.com/@sonarproductions_video"
        target="_blank"
        rel="noopener noreferrer"
      >
        Scopri
      </ButtonLink>
      {/* <AncorTag
        href="https://www.youtube.com/@sonarproductions_video"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Scopri</Button>
      </AncorTag> */}
    </ContainerSection>
  );
};

export default FootSection;
