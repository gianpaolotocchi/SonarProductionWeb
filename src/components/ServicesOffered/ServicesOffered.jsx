import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import AnimationPage from "./AnimationPage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
  position: relative; /* Aggiungi questa proprietà */
`;

const TitleServices = styled.h1`
  font-size: 3rem;
  color: rgb(255, 195, 0);
  text-align: center;
`;

const ContImg = styled.div`
  height: 200px;
  width: 300px;
  background-image: url("https://picsum.photos/seed/picsum/200/300");
  background-size: cover;
  background-position: contain;
  background-repeat: no-repeat;
  border-radius: 5vh;
  margin-bottom: 30px;
`;

const ContFoot = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colonne su schermi piccoli */
  gap: 20px;
  width: 100%;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); /* 4 colonne su schermi più grandi */
    gap: 80px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

const Paragraph = styled.p`
  color: #fff;
  margin: 0 auto;
  font-size: 1.5rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    padding: 0 1vh;
    margin-bottom: 20px;
  }
  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

const ButtonContact = styled.button`
  width: 30%;
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
  margin: 4vh 0;

  &:hover {
    border: 1px solid #ffc300;
    background-color: #000;
    color: rgb(255, 195, 0);
    box-shadow: 2px 2px 5px #ffc300; /* Ombra */
    transform: scale(1.1); /* Ingrandisci senza spostare gli altri elementi */
  }

  @media (max-width: 768px) {
    width: 60%; /* Bottone più largo su schermi piccoli */
    padding: 2vh 4vh;
    font-size: 1rem;
  }
`;

const ServicesOffered = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(true);
  const contFootRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      const animationObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsAnimationVisible(true);
          } else {
            setIsAnimationVisible(false);
          }
        },
        { threshold: 0.5 }
      );

      animationObserver.observe(animationRef.current);

      return () => {
        if (animationRef.current)
          animationObserver.unobserve(animationRef.current);
      };
    }
  }, []);

  return (
    <Container>
      <TitleServices>Services Offered</TitleServices>
      <div ref={animationRef}>
        <AnimationPage isVisible={isAnimationVisible} />
      </div>
      <ContImg />
      <ContFoot ref={contFootRef}></ContFoot>
      <ButtonContainer>
        <Paragraph>
          Contact us for more information on the services offered
        </Paragraph>
        <ButtonContact>Contact Us</ButtonContact>
      </ButtonContainer>
    </Container>
  );
};

export default ServicesOffered;
