// Componente principale per unire le animazioni
import React, { useEffect, useState } from "react";
import CineCamera from "./CineCameraIMG";
import BrushStrokeAnimation from "./ScrollAnimationComponent";
import TitleOurWork from "./TitleOurWork";
// import ContWaveUP from "./interSection";
import Slider from "../Slider/Slider";
import FootSection from "./FootSection";
import styled from "styled-components";

const ContentSection = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 20px 0;
  margin: 0;
  position: relative;
  overflow: hidden;
`;
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
    fill: #000;
  }
`;

const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPoint = window.innerHeight * 0.7;
    setIsVisible(scrollPosition > triggerPoint);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ContentSection>
      <TitleOurWork />{" "}
      {/* creare animazione in modo che il titolo una volta visibile mi entri da destra dopo il completamento dell' animazione  ContWaveUP  */}
      <CineCamera isVisible={isVisible} />
      {/* <BrushStrokeAnimation isVisible={isVisible} /> */}
      <ContWaveUP>
        <svg viewBox="0 0 1800 120" preserveAspectRatio="none">
          <path
            d="M3000,70 C2850,50 2700,60 2550,30 C2400,0 2250,40 2100,20 C1950,-10 1800,0 0,50 V120 H3000 Z"
            className="shape-fill"
          ></path>
        </svg>{" "}
        {/* creare animazione che  una volta visibile mi scenda il componente come una tendina in modo da dare un effetto accattivante */}
      </ContWaveUP>
      <Slider />
      <FootSection />
    </ContentSection>
  );
};

export default OurWork;
