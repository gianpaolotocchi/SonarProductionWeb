import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import cinepresa from "../../assets/Media/Photo/cinepresa.jpeg";
// freepik-export-20240823104451ZN1X.png
// Animazione per l'entrata della cinepresa da destra
const slideInFromRight = keyframes`
  0% { transform: translateX(100vw); }
  100% { transform: translateX(0); }
`;

// Animazione di salto e rotazione
const jumpAndRotate = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-30px) rotate(-15deg); }
  50% { transform: translateY(0) rotate(-30deg); }
  65% { transform: translateY(0px) rotate(0deg); }
  75% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

// Animazione di ammortizzamento
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const ScrollAnimationComponent = styled.div`
  width: 40vw;
  height: 40vh;
  display: block;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 10%;
  left: 65%;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.5s ease-out;

  &.animate {
    opacity: 1;
    animation: ${slideInFromRight} 2s ease-out forwards;
  }
  @media (max-width: 768px) {
    top: 3%;
    left: 55%;
    width: 30vw;
    height: 30vh;
  }
  @media (max-width: 1140px) {
    top: 8%;
    left: 65%;
    width: 35vw;
    height: 35vh;
  }
`;
const CameraWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${cinepresa});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${jumpAndRotate} 4s ease-out;
  trasition: transform 0.5s ease-in-out;
`;

const CineCamera = ({ isVisible }) => {
  const [delayedVisible, setDelayedVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Reset the animation by updating the key
      setAnimationKey((prevKey) => prevKey + 1);

      const timer = setTimeout(() => {
        setDelayedVisible(true);
      }, 0); // Optional delay before animation

      return () => clearTimeout(timer);
    } else {
      setDelayedVisible(false);
    }
  }, [isVisible]);

  return (
    <ScrollAnimationComponent
      key={animationKey} // Force re-render to reset animation
      className={delayedVisible ? "animate" : ""}
    >
      <CameraWrapper />
    </ScrollAnimationComponent>
  );
};

export default CineCamera;
