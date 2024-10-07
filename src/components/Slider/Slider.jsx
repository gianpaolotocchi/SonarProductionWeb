import React from "react";
import SliderDesktop from "./SliderDesk-Drag-n-Drop-AutoScrollX";
import SliderMobile from "./SliderMobileAUTOSCROLLX-Drag-n-Drop";
import { useMediaQuery } from "react-responsive";

const Slider = () => {
  // Verifica se il dispositivo è mobile (fino a 768px)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Ritorna la versione corretta dello slider
  return isMobile ? <SliderMobile /> : <SliderDesktop />;
};

export default Slider;
