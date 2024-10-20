import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import AnimationPage from "./AnimationPage";
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
  position: relative; /* Aggiungi questa proprietà */
`;
const ContWaveUP = styled.div`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; /* Assicurati che sia sotto gli altri elementi */
  overflow: hidden;
  line-height: 0;
  transform: scaleX(-1) scaleY(-1);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 20vh;
  }

  path {
    fill: #fde34d;
  }
`;

const TitleServices = styled.h1`
  font-size: 3rem;
  color: rgb(0, 0, 0);
  text-align: center;
  z-index: 2;
  transform: translateY(-30%);
  animation: ${(props) => (props.isVisible ? slideIn : "none")} 2s ease-out;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  color: white;
  opacity: 0;
  transform: translateY(20px);

  &.animate {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 2s ease-out, transform 2s ease-out;
  }

  /* Invert the content for specific items */
  &.invert {
    transform: scaleX(-1); /* Flip horizontally */
  }

  @media (min-width: 768px) {
    padding: 30px;
    flex-direction: row; /* Change to horizontal on larger screens */
  }
`;

const GridImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 9px solid #ffc300;
  object-fit: cover;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const ServiceDescription = styled.p`
  flex: 1;
  font-size: 1.5rem;
  text-align: start;
  padding: 0 30px;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }

  /* Invert the description text */
  &.invert {
    transform: scaleX(-1);
  }
`;

const ServicesOffered = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const titleRef = useRef(null);
  const gridRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimationVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
          // else {
          //   entry.target.classList.remove("animate");
          // }
        });
      },
      { threshold: 0.5 }
    );

    gridRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      gridRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Container>
      <TitleServices ref={titleRef} isVisible={isAnimationVisible}>
        Services Offered
      </TitleServices>
      <ContWaveUP>
        <svg
          transform="scale(-1, 1)"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M3000,70 C2850,50 2700,60 2550,30 C2400,0 2250,40 2100,20 C1950,-10 1800,0 0,50 V120 H3000 Z"></path>
        </svg>
      </ContWaveUP>

      <GridContainer>
        {/* Primo GridItem */}
        <GridItem ref={(el) => (gridRefs.current[0] = el)}>
          <GridImage src="https://picsum.photos/200/300" alt="Service 1" />
          <ServiceDescription>
            <h2>Consulenza e Pianificazione Creativa</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            nostrum, illum eligendi a reprehenderit illo magnam harum eaque
            tempore, exercitationem porro aut provident? Recusandae nulla enim
            reiciendis sit voluptates sequi.Description
          </ServiceDescription>
        </GridItem>

        {/* Secondo GridItem con inversione */}
        <GridItem ref={(el) => (gridRefs.current[1] = el)} className="invert">
          <GridImage src="https://picsum.photos/200/300" alt="Service 2" />
          <ServiceDescription className="invert">
            <h2>Riprese Video</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates voluptate inventore soluta. Placeat facilis aliquid id
            pariatur. Sapiente aliquid ratione, asperiores facilis velit
            voluptatibus modi necessitatibus ducimus quo earum.Service 2
            Description
          </ServiceDescription>
        </GridItem>

        {/* Terzo GridItem */}
        <GridItem ref={(el) => (gridRefs.current[2] = el)}>
          <GridImage src="https://picsum.photos/200/300" alt="Service 3" />
          <ServiceDescription>
            <h2>Montaggio Video</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            error nemo officia eum! Perferendis enim tempore nam sed beatae
            autem et facilis, assumenda accusantium labore, minima culpa sit,
            reiciendis cum?Service 3 Description
          </ServiceDescription>
        </GridItem>

        {/* Quarto GridItem */}
        <GridItem className="invert" ref={(el) => (gridRefs.current[3] = el)}>
          <GridImage src="https://picsum.photos/200/300" alt="Service 3" />
          <ServiceDescription className="invert">
            <h2>Post-Produzione</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            error nemo officia eum! Perferendis enim tempore nam sed beatae
            autem et facilis, assumenda accusantium labore, minima culpa sit,
            reiciendis cum?Service 3 Description
          </ServiceDescription>
        </GridItem>
      </GridContainer>
      {/* <div ref={animationRef}>
        <AnimationPage isVisible={isAnimationVisible} />
      </div> */}
      {/* <ContImg /> */}
      {/* <ContFoot></ContFoot> */}
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
