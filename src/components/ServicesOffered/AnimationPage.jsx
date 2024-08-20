import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animazione della rotazione su sé stessi per la cinepresa
const rotateOnScroll = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Animazione per l'entrata della cinepresa da destra
const slideInFromRight = keyframes`
  0% { transform: translateX(100vw); }
  100% { transform: translateX(0); }
`;

const ScrollAnimationComponent = styled.svg`
  width: 4vw; /* Riduzione della dimensione (1 a 5 rispetto all'originale) */
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 10%;
  left: 80%;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.5s ease-out;

  &.animate {
    opacity: 1;
    animation: ${slideInFromRight} 2s ease-out forwards,
      ${rotateOnScroll} 5s linear infinite;
  }

  @media (max-width: 768px) {
    width: 6vw; /* Adjust size for smaller screens */
    height: auto;
    top: 6%;
    left: 75%;
  }

  @media (max-width: 1440px) {
    width: 3.2vw; /* Adjust size for mid-sized screens */
    height: auto;
    top: 2%;
    left: 70%;
  }

  @media (min-width: 1440px) {
    width: 3.4vw; /* Adjust size for larger screens */
    height: auto;
    top: -2%;
    left: 70%;
  }
`;

const CameraWrapper = styled.g``;

const Line = styled.line`
  stroke: #ffc300;
  stroke-width: 2;
  stroke-linecap: round;
`;

const Circle = styled.circle`
  stroke: #ffc300;
  stroke-width: 2;
  fill: none;
`;

const Rect = styled.rect`
  stroke: #ffc300;
  stroke-width: 2;
  fill: none;
`;

const Lens = styled.circle`
  stroke: #ffc300;
  stroke-width: 2;
  fill: none;
  animation: ${rotateOnScroll} 1.5s ease-in-out infinite;
`;

const Arm = styled.line`
  stroke: #ffc300;
  stroke-width: 2;
  stroke-linecap: round;
`;

const AnimationPage = ({ isVisible }) => {
  const [delayedVisible, setDelayedVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Reset the animation by updating the key
      setAnimationKey((prevKey) => prevKey + 1);
      console.log(" sono nell' if isVisible");
      const timer = setTimeout(() => {
        setDelayedVisible(true);
      }, 0); // Optional delay before animation

      return () => clearTimeout(timer);
    } else {
      console.log(" sono nell' else isVisible");

      setDelayedVisible(false);
    }
    console.log("isVisible", isVisible);
  }, [isVisible]);

  return (
    <ScrollAnimationComponent
      //   key={animationKey} // Force re-render to reset animation
      className={delayedVisible ? "animate" : ""}
      viewBox="0 0 120 120"
    >
      <CameraWrapper>
        <Rect x="30" y="50" width="60" height="30" />
        <Circle cx="35" cy="35" r="12" />
        <Circle cx="35" cy="35" r="2" fill="#000" />
        <Circle cx="85" cy="35" r="12" />
        <Circle cx="85" cy="35" r="2" fill="#000" />
        <Lens cx="105" cy="65" r="5" />
        <Line x1="90" y1="65" x2="100" y2="65" />
        <Rect x="45" y="35" width="30" height="5" />
        <Line x1="40" y1="80" x2="30" y2="100" />
        <Line x1="80" y1="80" x2="90" y2="100" />
        <Line x1="60" y1="80" x2="60" y2="100" />
        <Arm x1="35" y1="47" x2="35" y2="50" />
        <Arm x1="85" y1="47" x2="85" y2="50" />
      </CameraWrapper>
    </ScrollAnimationComponent>
  );
};

export default AnimationPage;
