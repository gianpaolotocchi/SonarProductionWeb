import React, { useState, useRef } from "react";
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

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 65px;
  height: 65px;
  background-color: rgb(255, 195, 0) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  ${(props) => (props.$left ? "left: 20px;" : "right: 20px;")}
`;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

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

  // Creazione di una lista duplicata per effetto di scorrimento continuo
  const infiniteCards = [...cards, ...cards, ...cards];

  const handleScroll = (direction) => {
    const cardWidth = sliderRef.current.querySelector(".card").offsetWidth;
    let newIndex = currentIndex + direction;

    // Calcola il nuovo indice per schermi piccoli
    if (window.innerWidth <= 768) {
      newIndex = currentIndex + direction * 1; // Sposta di 2 card
    }

    setCurrentIndex(newIndex);

    sliderRef.current.style.transition = `transform 0.5s ease-in-out`;
    sliderRef.current.style.transform = `translateX(${
      -newIndex * cardWidth
    }px)`;

    // Gestione del ciclo continuo
    setTimeout(() => {
      if (newIndex >= totalCards) {
        sliderRef.current.style.transition = "none";
        newIndex = newIndex % totalCards;
        setCurrentIndex(newIndex);
        sliderRef.current.style.transform = `translateX(${
          -newIndex * cardWidth
        }px)`;
      } else if (newIndex < 0) {
        sliderRef.current.style.transition = "none";
        newIndex = newIndex + totalCards;
        setCurrentIndex(newIndex);
        sliderRef.current.style.transform = `translateX(${
          -newIndex * cardWidth
        }px)`;
      }
    }, 500);
  };

  return (
    <SliderWrapper>
      <Arrow $left onClick={() => handleScroll(-1)}>
        ◄
      </Arrow>

      <CardsContainer ref={sliderRef}>
        {infiniteCards.map((card, index) => (
          <Card key={index} className="card">
            {card}
          </Card>
        ))}
      </CardsContainer>

      <Arrow onClick={() => handleScroll(1)}>►</Arrow>
    </SliderWrapper>
  );
};

export default Slider;
