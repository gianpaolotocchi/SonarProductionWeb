import React, { useState, useRef } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
  cursor: grab;

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
    min-width: 52vw !important;
    height: 50vh !important;
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

const SliderDesktopDragAnDown = () => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const startXRef = useRef(0);
  const currentTranslateXRef = useRef(0);
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

  // Inizio del tocco o mouse down
  const handleStart = (e) => {
    setIsDragging(true);
    const startX = e.touches ? e.touches[0].clientX : e.clientX;
    startXRef.current = startX;
    currentTranslateXRef.current = sliderRef.current.style.transform
      ? parseFloat(sliderRef.current.style.transform.match(/-?\d+/g)[0])
      : 0;
    sliderRef.current.style.transition = "none"; // Disattiva la transizione durante il drag
  };

  // Movimento del mouse o touch
  const handleMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = startXRef.current - currentX;
    sliderRef.current.style.transform = `translateX(${
      currentTranslateXRef.current - diff
    }px)`;
  };

  // Fine del tocco o mouse up
  const handleEnd = (e) => {
    setIsDragging(false);
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startXRef.current - endX;

    currentTranslateXRef.current = currentTranslateXRef.current - diff;
    sliderRef.current.style.transition = `transform 0.5s ease-in-out`;

    // Assicuriamo lo scroll continuo
    updateInfiniteScroll();
  };

  const handleLeave = () => {
    if (isDragging) handleEnd(); // Ferma il drag quando il mouse esce dall'area
  };

  return (
    <SliderWrapper
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleLeave}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
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

export default SliderDesktopDragAnDown;
