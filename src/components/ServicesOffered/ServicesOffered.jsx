import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
// import AnimationPage from "./AnimationPage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
`;

const TitleServices = styled.h1`
  font-size: 3rem;
  color: rgb(255, 195, 0);
  text-align: center;
`;

const ContImg = styled.div`
  height: 60vh;
  width: 85vw;

  background-image: url("https://picsum.photos/seed/picsum/600/800");
  background-size: cover;
  background-position: center;
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

const drawCheckmark = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const ListItem = styled.li`
  color: white;
  font-size: 1.5rem;
  position: relative;
  list-style-type: none;
  padding: 20px;
  margin: 10px;
  text-align: center;
  background: transparent;
  border-radius: 8px;
`;

const Checkmark = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  stroke: #4caf50;
  stroke-width: 4px;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: ${drawCheckmark} 0.7s ease forwards;
  animation-delay: ${(props) => props.delay || 0}s;
  opacity: 0.8;
  z-index: 1; /* Spunta dietro al testo */
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
  @media (max-width: 768px) {
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
  const [currentIndex, setCurrentIndex] = useState(-1);
  const services = ["Consulenza", "Ripresa", "Montaggio", "Pubblicazione"];
  const contFootRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentIndex === -1) {
          setCurrentIndex(0);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (contFootRef.current) {
      observer.observe(contFootRef.current);
    }

    return () => {
      if (contFootRef.current) {
        observer.unobserve(contFootRef.current);
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < services.length) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 0);

      return () => clearInterval(timer);
    }
  }, [currentIndex, services.length]);

  return (
    <Container>
      <TitleServices>Services Offered</TitleServices>
      {/* <AnimationPage /> */}
      <ContImg />
      <ContFoot ref={contFootRef}>
        {services.map((service, index) => (
          <ListItem key={index}>
            {index < currentIndex && (
              <Checkmark viewBox="0 0 50 50" delay={index * 0.5}>
                <path d="M14 27 L22 35 L36 17" />
              </Checkmark>
            )}
            {service}
          </ListItem>
        ))}
      </ContFoot>
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
