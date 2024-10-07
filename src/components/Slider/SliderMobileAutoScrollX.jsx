import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    align-items: center;
  }
  @media (max-width: 1140px) {
    margin-top: 10vh;
  }
  @media (max-width: 1440px) {
    margin-top: 5vh;
  }
  @media (min-width: 1440px) {
    margin-top: 5vh;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Card = styled.div`
  margin: 5px;
  border-radius: 18px;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  flex-shrink: 0;
  position: relative;

  @media (max-width: 768px) {
    min-width: 52vw !important; /* 50% della larghezza dello schermo */
    height: 50vh !important; /* Stessa altezza della larghezza per mantenere proporzioni */
  }

  @media (max-width: 1440px) {
    min-width: 24vw;
    height: 45vh;
  }

  @media (min-width: 1440px) {
    margin-top: 8vh;
    min-width: 19vw;
    height: 55vh;
  }
`;

const SliderMobile = () => {
  const sliderRef = useRef(null);
  const currentTranslateXRef = useRef(0);
  const scrollAnimationRef = useRef(null);

  const cards = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
    "Card 6",
    "Card 7",
    "Card 8",
  ];

  const totalCards = cards.length;
  const infiniteCards = [...cards, ...cards, ...cards];

  // Funzione per calcolare il nuovo indice in base alla posizione di scroll
  const updateInfiniteScroll = () => {
    const cardWidth = sliderRef.current.querySelector(".card").offsetWidth;
    const totalWidth = cardWidth * totalCards;
    let currentTranslateX = currentTranslateXRef.current;

    if (currentTranslateX < -totalWidth) {
      currentTranslateXRef.current += totalWidth;
    } else if (currentTranslateX > 0) {
      currentTranslateXRef.current -= totalWidth;
    }

    sliderRef.current.style.transition = "none";
    sliderRef.current.style.transform = `translateX(${currentTranslateXRef.current}px)`;
  };

  // Funzione per l'autoscrolling continuo
  const autoScroll = () => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.querySelector(".card").offsetWidth;
    currentTranslateXRef.current -= 0.3; // Regola la velocità dello scroll

    sliderRef.current.style.transform = `translateX(${currentTranslateXRef.current}px)`;

    // Controlla e ripristina la posizione
    updateInfiniteScroll();

    scrollAnimationRef.current = requestAnimationFrame(autoScroll);
  };

  // Ferma lo scrolling automatico
  const stopAutoScroll = () => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }
  };

  // Avvia l'autoscrolling al montaggio del componente
  useEffect(() => {
    autoScroll();
    return () => stopAutoScroll(); // Ferma l'autoscroll quando il componente viene smontato
  }, []);

  return (
    <SliderWrapper>
      <CardsContainer ref={sliderRef}>
        {infiniteCards.map((card, index) => (
          <Card key={index} className="card">
            {card}
          </Card>
        ))}
      </CardsContainer>
    </SliderWrapper>
  );
};

export default SliderMobile;
