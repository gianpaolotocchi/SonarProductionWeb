import React from "react";
import styled from "styled-components";
import CiaksiGiraGIALLOREvERSENOBG from "../../assets/Media/Photo/freepik-export-20240823104451ZN1X.png";
import Pellicola from "../../assets/Media/Photo/pellicolaGIALLA.png";

const Container = styled.div`
  height: 120vh;
  width: 100%;
  background-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

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
    transform: translate(0%, -130%);
  }
`;

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

const ContText = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 18%;
  @media (max-width: 768px) {
    width: 90%;
    top: auto;
    left: auto;
    transform: none;
    margin: 20px 0;
  }
`;

const BodyText = styled.h4`
  color: white;
  font-size: calc(1.3rem + 0.5vw);
  text-align: center;
  padding: 0 3vh;
  z-index: 2;
  position: relative;
  margin: 0;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #ffc300;
    z-index: 0;
    clip-path: url(#rect-cp);
    animation: reveal 1s forwards;

    @keyframes reveal {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
`;

const ContIMG = styled.div`
  height: calc(30vh + 10vw);
  width: calc(30vh + 10vw);
  background-image: url(${CiaksiGiraGIALLOREvERSENOBG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  box-sizing: border-box;
  position: absolute;
  top: 39.2%;
  left: 50%;
  transform: translate(calc(60% + 5vw), calc(30% + 10vh));
  @media (max-width: 768px) {
    top: 52.7%;
    left: 0%;
  }
`;

const WhoWeAre = () => {
  return (
    <Container>
      <svg width="0" height="0">
        <clipPath id="rect-cp">
          <rect x="0" y="0" width="0" height="100%">
            <animate
              attributeName="width"
              dur="1s"
              fill="freeze"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.5,0,0.5,1"
              values="0;1"
            />
          </rect>
        </clipPath>
      </svg>

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
    </Container>
  );
};

export default WhoWeAre;
