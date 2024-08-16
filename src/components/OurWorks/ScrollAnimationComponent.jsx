import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
// Animazione della pennellata
const brushStrokeAnimation = keyframes`
  0% {
    stroke-dashoffset: 100%;
    opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
`;

const BrushStrokeSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: 20vh;
  left: 0;
  top: 8%;
  z-index: 0;
  overflow: visible;

  @media (max-width: 768px) {
    width: 120%;
    height: 30vh;
    top: 0;
    left: -5%;

    padding: 0;
  }
  @media (max-width: 1440px) {
    width: 130%;
    height: 45vh;
    top: -2%;
    left: -11%;
  }
  @media (min-width: 1440px) {
    width: 150%;
    height: 45vh;
    top: 0;
    left: -27%;
  }
`;

const BrushStrokePath = styled.path`
  stroke-width: 5px;
  fill: none;
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  opacity: 0;
  stroke-linecap: round;
  stroke-linejoin: round;

  &.showFromLeft {
    stroke: #000000;
    animation: ${brushStrokeAnimation} 1.5s forwards;
  }

  &.showFromRight {
    stroke: #f0c54a;
    animation: ${brushStrokeAnimation} 1.5s forwards;
  }
`;

const BrushStrokeAnimation = ({ isVisible }) => (
  <BrushStrokeSVG viewBox="0 0 100 20">
    <BrushStrokePath
      className={isVisible ? "showFromLeft" : ""}
      d="M 10,10 Q 30,0 50,10 T 90,10"
    />
    <BrushStrokePath
      className={isVisible ? "showFromRight" : ""}
      d="M 10,10 Q 30,20 50,10 T 90,10"
    />
  </BrushStrokeSVG>
);

export default BrushStrokeAnimation;
