import React from "react";
import styled from "styled-components";
import CiaksiGiraGIALLOREvERSE from "../../assets/Media/Photo/CiaksiGiraGIALLOREvERSE.jpeg";
import CiaksiGiraGIALLOREvERSENOBG from "../../assets/Media/Photo/freepik-export-20240823104451ZN1X.png";

import RealPellicolaBG from "../../assets/Media/Photo/RealPellicolaSonarProduction.jpg";
import Pellicola from "../../assets/Media/Photo/pellicolaGIALLA.png";

// Container principale
const Container = styled.div`
  height: 120vh;
  width: 100%;
  background-color: #070101;
  //   background-image: linear-gradient(
  //       rgba(255, 255, 255, 0.3),
  //       rgba(255, 255, 255, 0.3)
  //     ),
  //     url(${RealPellicolaBG});
  //   background-size: cover;
  //   background-position: center;
  //   background-repeat: no-repeat;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Contenitore per il titolo
const ContTitle = styled.div`
  height: 32%;
  width: 100%;

  background-image: url(${Pellicola});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 2;

  position: absolute;
  transform: translate(0%, -108%);
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
// Titolo della pagina
const TitlePage = styled.h1`
  color: #000;
  font-size: calc(2rem + 2vw);

  padding-right: 3vh;
  text-shadow: 25px 25px 04px rgba(0, 0, 0, 0.3);
  margin: 1vw;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: calc(1.2rem + 2vw);
  }
`;

// Contenitore per il testo
const ContText = styled.div`
  width: 60%;
  //   background-color: rgba(255, 255, 255, 0.6);
  //   );
  //   border-radius: 2vh;

  //   box-shadow: 3px 3px 15px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 40%;
  left: 5%;
  transform: translate(25%, 10%);

  @media (max-width: 768px) {
    width: 90%;
    top: auto;
    left: auto;
    transform: none;
    margin: 20px 0;
  }
`;

// Testo principale
const BodyText = styled.h4`
  font-family: "sans-serif";
  color: white;
  font-size: calc(1.3rem + 0.5vw);
  text-align: center;
  padding: 0 3vh;
  z-index: 2;
  position: relative;
`;

const ContIMG = styled.div`
  height: calc(30vh + 10vw); // Dimensione dell'altezza dinamica
  width: calc(30vh + 10vw); // Dimensione della larghezza dinamica
  background-image: url(${CiaksiGiraGIALLOREvERSENOBG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  position: absolute;
  top: 39.2%;
  left: 50%;

  transform: translate(
    calc(60% + 5vw),
    calc(30% + 10vh)
  ); // Trasformazione dinamica
  @media (max-width: 768px) {
    top: 52.7%;
    left: 0%;
  }
`;

// // Onde decorative
// const ContWaveUP = styled.div`
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 0;
//   overflow: hidden;
//   line-height: 0;

//   svg {
//     position: relative;
//     display: block;
//     width: 100%;
//     height: 50vh;
//     transform: rotate(180deg);
//   }

//   .shape-fill {
//     fill: #ffc300;
//   }
// `;
// // onda sotto
// const ContWaveDown = styled.div`
//   width: 100%;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   z-index: 1;
//   overflow: hidden;
//   line-height: 0;

//   svg {
//     position: relative;
//     display: block;
//     width: calc(100% + 1.3px);
//     height: 20vh;
//   }

//   .shape-fill {
//     fill: #ffc300;
//   }
// `;

const WhoWeAre = () => {
  return (
    <Container>
      {/* <ContWaveUP>
        <svg viewBox="0 0 1200 220" preserveAspectRatio="none">
          <path
            d="M0,0 C600,120 1200,0 1800,120 L2400,0 L3000,120 V240 H0 Z"
            className="shape-fill"
          ></path>
        </svg>
      </ContWaveUP> */}
      <ContTitle>
        <TitlePage>Conosciamoci</TitlePage>
      </ContTitle>
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
        <svg viewBox="0 0 1200 109" preserveAspectRatio="none">
          <path
            d="M0,0 C600,120 1200,0 1800,120 L2400,0 L3000,120 V240 H0 Z"
            className="shape-fill"
          ></path>
        </svg>
      </ContWaveDown> */}
    </Container>
  );
};

export default WhoWeAre;
