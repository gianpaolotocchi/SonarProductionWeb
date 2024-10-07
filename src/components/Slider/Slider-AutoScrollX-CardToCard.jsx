// CODICE PER SLIDER AUTO SCROLL LATERALE 1 CARD ALLA VOLTA CON UN SET INTERVAL DI 2 SECONDI
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
    min-width: 52vw !important;
    height: 50vh !important;
  }

  @media (max-width: 1440px) {
    min-width: 24vw;
    height: 65vh;
  }

  @media (min-width: 1440px) {
    margin-top: 8vh;
    min-width: 24vw;
    height: 65vh;
  }
`;

const SliderAutoScrollX = () => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const startXRef = useRef(0);
  const currentTranslateXRef = useRef(0);
  const scrollIntervalRef = useRef(null);
  const autoScrollDuration = 2000; // Durata per riprendere lo scrolling automatico (2 secondi)

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
  const infiniteCards = [...cards, ...cards, ...cards]; // Per continuità infinita

  const cardWidth = sliderRef.current
    ? sliderRef.current.querySelector(".card").offsetWidth
    : 0;

  // Funzione per lo scrolling automatico
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) return; // Non avviare se è già in corso
    scrollIntervalRef.current = setInterval(() => {
      currentTranslateXRef.current -= cardWidth; // Muovi verso sinistra (scroll verso destra)
      sliderRef.current.style.transform = `translateX(${currentTranslateXRef.current}px)`;

      // Riavvolgi se supera il limite sinistro
      if (currentTranslateXRef.current <= -(cardWidth * totalCards)) {
        currentTranslateXRef.current = 0;
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(${currentTranslateXRef.current}px)`;
        setTimeout(() => {
          sliderRef.current.style.transition = `transform 0.5s ease-in-out`;
        }, 50); // Aspetta per evitare un salto visibile
      }
    }, 3000); // Cambia ogni 3 secondi
  };

  // Ferma lo scrolling automatico
  const stopAutoScroll = () => {
    clearInterval(scrollIntervalRef.current);
    scrollIntervalRef.current = null;
  };

  // Inizio del tocco o mouse down
  const handleStart = (e) => {
    setIsDragging(true);
    const startX = e.touches ? e.touches[0].clientX : e.clientX;
    startXRef.current = startX;
    currentTranslateXRef.current = sliderRef.current.style.transform
      ? parseFloat(sliderRef.current.style.transform.match(/-?\d+/g)[0])
      : 0;

    stopAutoScroll(); // Ferma lo scrolling automatico quando inizia a interagire
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

    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX; // Usa clientX per eventi mouse, changedTouches per touch
    const diff = startXRef.current - endX;

    currentTranslateXRef.current = currentTranslateXRef.current - diff;
    sliderRef.current.style.transition = `transform 0.5s ease-in-out`;

    const minTranslateX = -(totalCards * cardWidth - cardWidth);
    const maxTranslateX = 0;

    // Applica i limiti
    if (currentTranslateXRef.current < minTranslateX) {
      currentTranslateXRef.current = minTranslateX;
    } else if (currentTranslateXRef.current > maxTranslateX) {
      currentTranslateXRef.current = maxTranslateX;
    }

    sliderRef.current.style.transform = `translateX(${currentTranslateXRef.current}px)`;

    setTimeout(() => {
      startAutoScroll();
    }, autoScrollDuration);
  };

  const handleLeave = () => {
    if (isDragging) handleEnd(); // Ferma il drag quando il mouse esce dall'area
  };

  // Avvia lo scrolling automatico al montaggio del componente
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // Ferma lo scrolling automatico quando il componente viene smontato
  }, []);

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

export default SliderAutoScrollX;
