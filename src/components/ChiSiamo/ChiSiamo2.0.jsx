import React, { useEffect, useState, useRef } from "react";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import cinepresaScura from "../../assets/Media/Photo/cinepresaScura.png";
import Pellicola from "../../assets/Media/Photo/pellicolaGIALLA.png";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-bottom: 10vh;
`;
// Animazione per l'entrata pellicola da destra
const slideInFromRightPellicola = keyframes`
  0% { transform: translateX(100vw); }
  100% { transform: translateX(0); }
`;
const ContTitle = styled.div`
  height: 32vh;
  width: 100%;
  background-image: url(${Pellicola});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &.animate {
    opacity: 1;
    animation: ${slideInFromRightPellicola} 1.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
  @media (max-width: 768px) {
    justify-content: center;
    // transform: translate(0%, -130%);
  }
`;

const TitlePage = styled.h1`
  color: #000;
  font-size: calc(2rem + 2vw);
  padding-right: 3vh;
  text-shadow: 25px 25px 04px rgba(0, 0, 0, 0.3);
  margin: 1vw;
  z-index: 3;
  @media (max-width: 768px) {
    font-size: calc(1.2rem + 2vw);
  }
`;

const ContText = styled.div`
  width: 60%;
  z-index: 2;
  position: absolute;
  top: 45%;
  left: 20%;
  @media (max-width: 768px) {
    width: 90%;
    top: auto;
    left: auto;
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

  // &::before {
  //   content: "";
  //   position: absolute;
  //   height: 100%;
  //   width: 100%;
  //   top: 0;
  //   left: 0;
  //   background-color: #ffc300;
  //   z-index: 0;
  //   clip-path: url(#rect-cp);
  //   animation: reveal 1s forwards;

  //   @keyframes reveal {
  //     from {
  //       width: 0;
  //     }
  //     to {
  //       width: 100%;
  //     }
  //   }
  // }
`;

// Animazione per l'entrata della cinepresa da destra
const slideInFromRightCinePresa = keyframes`
  0% { transform: translate(-100vw); }
  100% { transform: translate(0); }
`;

const ContIMG = styled.div`
  height: calc(30vh + 10vw);
  width: calc(30vw + 10vw);

  box-sizing: border-box;
  position: absolute;
  top: 59.2%;
  left: 4%;
  opacity: 0;
  transition: opacity 0.5s ease-out;

  &.animate {
    opacity: 1;
    animation: ${slideInFromRightCinePresa} 1.5s ease-out forwards;
  }

  @media (max-width: 768px) {
    top: 76.7%;
    left: 0%;
  }
`;

// Animazione di salto e rotazione
const jumpAndRotate = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(30px) rotate(15deg); }
  50% { transform: translateY(0) rotate(30deg); }
  65% { transform: translateY(0px) rotate(0deg); }
  75% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const IMG = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${cinepresaScura});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${jumpAndRotate} 3s ease-out;
  transition: transform 0.5s ease-in-out;
`;

const WhoWeAre = () => {
  const [isVisiblePellicola, setIsVisiblePellicola] = useState(false);
  const [isVisibleCinepresa, setIsVisibleCinepresa] = useState(false);
  const [hasAnimatedPellicola, setHasAnimatedPellicola] = useState(false);
  const [hasAnimatedCinepresa, setHasAnimatedCinepresa] = useState(false);

  const pellicolaRef = useRef(null);
  const cinepresaRef = useRef(null);

  // IntersectionObserver per l'elemento Pellicola (con threshold 0.3)
  useEffect(() => {
    const observerPellicola = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimatedPellicola) {
          setIsVisiblePellicola(true);
          setHasAnimatedPellicola(true);
        }
      },
      { threshold: 0.3 }
    );

    if (pellicolaRef.current) {
      observerPellicola.observe(pellicolaRef.current);
    }

    return () => {
      if (pellicolaRef.current) {
        observerPellicola.unobserve(pellicolaRef.current);
      }
    };
  }, [hasAnimatedPellicola]);

  // IntersectionObserver per l'elemento Cinepresa (con threshold 0.5)
  useEffect(() => {
    const observerCinepresa = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimatedCinepresa) {
          setIsVisibleCinepresa(true);
          setHasAnimatedCinepresa(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cinepresaRef.current) {
      observerCinepresa.observe(cinepresaRef.current);
    }

    return () => {
      if (cinepresaRef.current) {
        observerCinepresa.unobserve(cinepresaRef.current);
      }
    };
  }, [hasAnimatedCinepresa]);

  return (
    <Element name="chiSiamo">
      <Container>
        {/* <svg width="0" height="0">
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
      </svg> */}

        <ContTitle
          ref={pellicolaRef}
          className={isVisiblePellicola ? "animate" : ""}
        >
          <TitlePage>Conosciamoci</TitlePage>
        </ContTitle>
        <ContIMG
          ref={cinepresaRef}
          className={isVisibleCinepresa ? "animate" : ""}
        >
          <IMG />
        </ContIMG>
        <ContText>
          <BodyText>
            Siamo un team di creativi appassionati, dedicati a trasformare idee
            in storie visive indimenticabili. Con anni di esperienza nel video
            making, realizziamo video aziendali, spot pubblicitari, videoclip
            musicali e contenuti digitali su misura, riflettendo l'essenza di
            ogni cliente. Dall'idea alla post-produzione, lavoriamo a stretto
            contatto con i nostri clienti per creare prodotti video di alta
            qualità. La nostra passione ci spinge a innovare e a costruire
            relazioni durature basate su fiducia e creatività condivisa.
          </BodyText>
        </ContText>
      </Container>
    </Element>
  );
};

export default WhoWeAre;
