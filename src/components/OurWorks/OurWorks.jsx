// Componente principale per unire le animazioni
import React, { useEffect, useState } from "react";
import CineCamera from './CineCameraAnimation';
import BrushStrokeAnimation from './ScrollAnimationComponent';
import Slider from '../Slider/Slider'
import FootSection from './FootSection'
import styled from 'styled-components';

const ContentSection = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  padding: 20px 0;
  margin: 0;
  position: relative;
  overflow: hidden;

`;

const TitleOur = styled.h1`
  position: relative;
  z-index: 2;
  color: rgb(240, 197, 74);
  font-size: 3.5rem;
  text-align: start;
  margin-left: 1vh;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-left: 2vh;
  }
`;

const TitleWork = styled.h2`
  position: relative;
  z-index: 2;
  color: rgb(240, 197, 74);
  font-size: 3rem;
  text-align: start;
  margin-left: 5vh;
  margin-top: -5vh;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 5vh;
  }
`;

const TitleOurWork = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPoint = window.innerHeight * 0.7;
    setIsVisible(scrollPosition > triggerPoint);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ContentSection>
      <TitleOur>Our</TitleOur>
      <TitleWork>Works</TitleWork>
      <CineCamera isVisible={isVisible} />  
      <BrushStrokeAnimation isVisible={isVisible} />
      <Slider/>
      <FootSection/>

    </ContentSection>
  );
};

export default TitleOurWork;