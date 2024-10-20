import React from "react";
import styled from "styled-components";

const ContWaveUP = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; /* Assicurati che sia sotto gli altri elementi */
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 15vh;
    transform: rotate(180deg); /* Ruota la wave */
  }

  .shape-fill {
    fill: #000;
  }
`;

const WaveUp = () => {
  return (
    <ContWaveUP>
      <svg viewBox="0 0 1800 120" preserveAspectRatio="none">
        <path
          d="M3000,70 C2850,50 2700,60 2550,30 C2400,0 2250,40 2100,20 C1950,-10 1800,0 0,50 V120 H3000 Z"
          className="shape-fill"
        ></path>
      </svg>{" "}
    </ContWaveUP>
  );
};
export default WaveUp;
