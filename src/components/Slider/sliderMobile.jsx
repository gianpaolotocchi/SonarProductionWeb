import React, { useState, useRef, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Funzione per scorrere
  const handleScroll = (direction) => {
    const cardWidth = sliderRef.current.querySelector(".card").offsetWidth;
    let newIndex = currentIndex + direction;

    if (window.innerWidth <= 768) {
      newIndex = currentIndex + direction * 1;
    }

    setCurrentIndex(newIndex);

    sliderRef.current.style.transition = `transform 0.5s ease-in-out`;
    sliderRef.current.style.transform = `translateX(${
      -newIndex * cardWidth
    }px)`;

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

  // Inizio del tocco
  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    currentTranslateXRef.current = sliderRef.current.style.transform
      ? parseFloat(sliderRef.current.style.transform.match(/-?\d+/g)[0])
      : 0;
    sliderRef.current.style.transition = "none"; // Disattiva la transizione mentre trascini
  };

  // Movimento del tocco
  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = startXRef.current - currentX;
    sliderRef.current.style.transform = `translateX(${
      currentTranslateXRef.current - diff
    }px)`;
  };

  // Fine del tocco
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleScroll(1); // Scorrere a destra
      } else {
        handleScroll(-1); // Scorrere a sinistra
      }
    } else {
      // Ripristina la posizione se lo swipe è troppo corto
      sliderRef.current.style.transition = `transform 0.5s ease-in-out`;
      sliderRef.current.style.transform = `translateX(${currentTranslateXRef.current}px)`;
    }
  };

  return (
    <SliderWrapper
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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

export default SliderMobile;
