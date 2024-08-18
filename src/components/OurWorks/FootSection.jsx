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
  margin-bottom: 1rem; /* Spazio tra il paragrafo e il bottone */

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    padding: 0 1vh;
    margin-bottom: 20px; /* Spazio tra paragrafo e bottone */
  }
  @media (min-width: 769px) {
    width: 40%;
    font-size: 1.1rem;
    text-align: start;
    margin-right: 2vh;
  }
`;

// Bottone con posizione relativa all'interno del contenitore padre
const Button = styled.button`
  background-color: rgb(255, 195, 0);
  color: #000;
  font-size: 1rem;
  padding: 1vh 2vh;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  box-shadow: 2px 2px 5px #000; /* Ombra */

  &:hover {
    background-color: #000;
    color: rgb(255, 195, 0);
    transform: scale(1.1); /* Ingrandisci senza spostare gli altri elementi */
  }

  @media (max-width: 768px) {
    width: 60%; /* Bottone più largo su schermi piccoli */
    padding: 2vh 4vh;
    font-size: 1rem;
  }
  @media (min-width: 769px) {
    margin-right: 2%;
  }
`;

const FootSection = () => {
  return (
    <ContainerSection>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde animi
        ratione sunt nemo dolore! Quae, optio? Nostrum quae iure ducimus?
        Molestiae magnam consectetur placeat odit nemo non vel necessitatibus
        animi?
      </Paragraph>
      <Button>View More</Button>
    </ContainerSection>
  );
};

export default FootSection;
