import React from "react";
import styled from "styled-components";

// Contenitore padre che gestisce i componenti
const ContainerSection = styled.div`
  position: relative;
  height: 15vh; /* Altezza adattabile */
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
    width: 100%; /* 40% della larghezza del contenitore su schermi grandi */
    justify-content: end;
    align-items: end;
  }
`;

// Paragrafo con posizione relativa all'interno del contenitore padre
const Paragraph = styled.p`
  font-size: 1rem;
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
    width: 60%;
    font-size: 0.9rem;
    text-align: start;
    margin: 2vh 0;
    padding-left: 3vh;
  }
`;

// Bottone con posizione relativa all'interno del contenitore padre
const Button = styled.button`
  background-color: rgb(240, 197, 74);
  color: #000;
  font-size: 1rem;
  padding: 1vh 2vh;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #000;
    color: rgb(240, 197, 74);
    font-weight: bold;
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
