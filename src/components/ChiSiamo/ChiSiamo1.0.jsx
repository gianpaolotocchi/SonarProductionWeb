import React from "react";
import styled, { keyframes } from "styled-components";
import CiaksiGiraGIALLOREvERSE from "../../assets/Media/Photo/CiaksiGiraGIALLOREvERSE.jpeg";
import CiaksiGiraGIALLO from "../../assets/Media/Photo/CiaksiGiraGIALLO.jpeg";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

// Animazione della pennellata
const zigzagAnimation = keyframes`
  0% {
    stroke-dashoffset: 100%;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  position: relative; /* Rendi il container relativo per posizionare ContWaveUP */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 1140px) {
    height: 80vh;
  }
`;

const TitlePage = styled.h1`
  color: #000;
  font-size: 3rem;
  text-align: center;
  padding-top: 8vh;
  margin: 0;
  z-index: 2; /* Assicurati che sia sopra a ContWaveUP */
  position: absolute; /* Posizione assoluta */

  @media (max-width: 768px) {
    font-size: 2.5rem;
    top: -4%;
    left: 20%;
  }
`;

const ContText = styled.div`
  width: 50%;
  border-radius: 2vh;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 10%; /* Scambiato con il top di ContIMG */
  left: -3%; /* Scambiato con il left di ContIMG */

  @media (max-width: 768px) {
    width: 90%; /* Adatta la larghezza per schermi piccoli */
    top: auto; /* Resetta il top per comportarsi bene nel layout flessibile */
    left: auto; /* Resetta il left per comportarsi bene nel layout flessibile */
    margin: 20px 0; /* Aggiungi margine per spaziatura */
  }
  @media (max-width: 1440px) {
    top: 35%;
    left: 1%;
  }
  @media (min-width: 1440px) {
    top: 34%;
    left: 4%;
  }
  @media (min-width: 1640px) {
    top: 33%;
    left: 5%;
  }
`;

// const ContText = styled.div`
//   width: 50%;
//   border-radius: 2vh;
//   //   background-color: #ffc300;
//   //   box-shadow: 3px 3px 15px #000;
//   flex-wrap: wrap;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 2; /* Z-index più alto per sovrapporsi all'immagine */
//   position: absolute; /* Posizione relativa per mantenere il contesto di stacking */
//   top: 37.3%;
//   left: 40%;
//   @media (max-width: 768px) {
//     width: 80%;
//     top: 42%;
//     left: 10%;
//   }
//   @media (max-width: 1440px) {
//     top: 33.4%;
//     left: 45%;
//   }
//   @media (min-width: 1440px) {
//     top: 30.4%;
//     left: 45%;
//   }
//   @media (min-width: 1640px) {
//     top: 27.3%;
//     left: 42%;
//   }
// `;

const BodyText = styled.h4`
  font-family: "sans-serif";
  font-size: 1.2rem;
  text-align: justify;
  padding: 0 3vh 0 3vh;
  z-index: 2; /* Assicurati che sia sopra a ContWaveUP */
  position: relative;

  @media (max-width: 768px) {
    font-size: 0.9rem !important;
  }

  @media (max-width: 1140px) {
    font-size: 1rem !important;
    padding: 0 3vh 0 3vw;
  }

  @media (max-width: 1440px) {
    font-size: 1.5rem;
    padding: 0 3vh 0 3vw;
  }

  @media (min-width: 1440px) {
    font-size: 1.7rem;
    padding: 0 3vh 0 3vw;
  }
  @media (min-width: 1640px) {
    font-size: 2rem;
    padding: 0 3vh 0 3vw;
  }
`;
const ContIMG = styled.div`
  height: 75%;
  width: 75%;
  background-image: url(${CiaksiGiraGIALLOREvERSE});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  position: absolute;
  top: 37.3%;
  left: 40%;

  @media (max-width: 768px) {
    width: 80%;
    height: auto; /* Adatta l'altezza in base alla larghezza */

    margin: 20px 0; /* Aggiungi margine per spaziatura */
  }

  @media (max-width: 1140px) {
    height: 65%;
    width: 55%;

    transform: translateX(16%) translateY(15%); /* Adatta lo spostamento se necessario */
  }

  @media (max-width: 1440px) {
    height: 65%;
    top: 6.4%;
    left: 39%;
  }

  @media (min-width: 1440px) {
    top: 6.4%;
    left: 42%;
  }

  @media (min-width: 1640px) {
    height: 85%;
    top: 4.3%;
    left: 42%;
  }
`;

// const ContIMG = styled.div`
//   height: 75%;
//   width: 75%;
//   background-image: url(${CiaksiGiraGIALLOREvERSE});
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   z-index: 0; /* Z-index inferiore rispetto a ContText */
//   position: absolute;
//   top: 10%;
//   left: -3%;

//   @media (max-width: 768px) {
//     height: 55%;
//     width: 55%;
//     z-index: 0;
//     position: absolute;
//     top: 0;
//     left: 45%;
//   }
//   @media (max-width: 1440px) {
//     width: 50%;
//     top: 10%;
//     left: -2%;
//   }
//   @media (min-width: 1440px) {
//     width: 50%;
//     top: 10%;
//     left: -3%;
//   }
//   @media (min-width: 1640px) {
//     width: 50%;
//     top: 10%;
//     left: -4%;
//   }
// `;

const ContWaveUP = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; /* Assicurati che sia sotto gli altri elementi */
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 20vh;
    transform: rotate(180deg); /* Ruota la wave */
  }

  .shape-fill {
    fill: #ffc300;
  }
`;

const ContWaveDown = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 20vh;
  }

  .shape-fill {
    fill: #ffc300;
  }
`;

const WhoWeAre = () => {
  return (
    <Container>
      <ContWaveUP>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M3000,70 C2850,50 2700,60 2550,30 C2400,0 2250,40 2100,20 C1950,-10 1800,0 0,50 V120 H3000 Z"
            className="shape-fill"
          ></path>
        </svg>
      </ContWaveUP>

      <TitlePage>Conosciamoci!!</TitlePage>
      <ContIMG />
      <ContText>
        <BodyText>
          Siamo un team di creativi appassionati, dedicati a trasformare idee in
          storie visive indimenticabili. Con anni di esperienza nel video
          making, realizziamo video aziendali, spot pubblicitari, videoclip
          musicali e contenuti digitali su misura, riflettendo l'essenza di ogni
          cliente. Dall'idea alla post-produzione, lavoriamo a stretto contatto
          con i nostri clienti per creare prodotti video di alta qualità. La
          nostra passione ci spinge a innovare e a costruire relazioni durature
          basate su fiducia e creatività condivisa.
        </BodyText>
      </ContText>
      {/* <ContWaveDown>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M3000,70 C2850,50 2700,60 2550,30 C2400,0 2250,40 2100,20 C1950,-10 1800,0 0,50 V120 H3000 Z"
            className="shape-fill"
          ></path>
        </svg>
      </ContWaveDown> */}
    </Container>
  );
};

export default WhoWeAre;
