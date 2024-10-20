import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import CiaksiGiraIMG from "../../assets/Media/Photo/CiaksiGiraMultiGradient.jpeg";
// Animazione per l'entrata della CiaksiGiraIMG da destra
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
    top: 2% !important;
    left: 60% !important;
    width: 38vw !important;
    height: 38vh !important;
  }
  @media (max-width: 1440px) {
    top: 8%;
    left: 75%;
    width: 25vw;
    height: 25vh;
  }
  @media (min-width: 1440px) {
    top: 7%;
    left: 74%;
    width: 34vw;
    height: 34vh;
  }
`;
const CameraWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${CiaksiGiraIMG});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${jumpAndRotate} 4s ease-out;
  trasition: transform 0.5s ease-in-out;
`;

const CineCamera = ({ isVisible }) => {
  const [isVisibleCiakIMG, setIsVisibleCiakIMG] = useState(false);

  const [hasAnimatedCiakIMG, setHasAnimatedCiakIMG] = useState(false);

  const CiakIMGRef = useRef(null);

  // IntersectionObserver per l'elemento Pellicola (con threshold 0.3)
  useEffect(() => {
    const observerCiakIMG = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimatedCiakIMG) {
          setIsVisibleCiakIMG(true);
          setHasAnimatedCiakIMG(true);
        }
      },
      { threshold: 0.3 }
    );

    if (CiakIMGRef.current) {
      observerCiakIMG.observe(CiakIMGRef.current);
    }

    return () => {
      if (CiakIMGRef.current) {
        observerCiakIMG.unobserve(CiakIMGRef.current);
      }
    };
  }, [hasAnimatedCiakIMG]);
  // const [delayedVisible, setDelayedVisible] = useState(false);
  // const [hasAnimated, setHasAnimated] = useState(false);
  // const [animationKey, setAnimationKey] = useState(0);

  // useEffect(() => {
  //   if (isVisible) {
  //     // Reset the animation by updating the key
  //     setAnimationKey((prevKey) => prevKey + 1);

  //     const timer = setTimeout(() => {
  //       setDelayedVisible(true);
  //     }, 0); // Optional delay before animation

  //     return () => clearTimeout(timer);
  //   } else {
  //     setDelayedVisible(false);
  //   }
  // }, [isVisible]);

  return (
    <ScrollAnimationComponent
      ref={CiakIMGRef}
      className={isVisibleCiakIMG ? "animate" : ""}
    >
      <CameraWrapper />
    </ScrollAnimationComponent>
  );
};

export default CineCamera;
