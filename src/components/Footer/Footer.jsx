import React from "react";
import styled from "styled-components";
// import WaveUp from "./WaveUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

const FooterContainer = styled.div`
  background-color: #fde34d;
  color: white;
  padding-bottom: 2vh;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Centra gli elementi nella colonna */
  }
`;

const Section = styled.div`
  margin: 10px;
  z-index: 2;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const Span = styled.span`
  margin-left: 7vh;
  display: inline;
  font-weight: bold;
  color: #000;
  @media (max-width: 768px) {
    font-size: 0.5rem;
    margin-left: 4vh;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;


  a {
    margin: 0 10px;
    font-size: 2rem;
    text-decoration: none;

    :hover {
      color: black; /* Cambia il colore al passaggio del mouse */
transform: scale(1.1); /* Ingrandisci senza spostare gli altri elementi */
    }
      @media (max-width: 768px) {
      font-size: 1rem;
      display: flex-column;
      }
`;

const WhatsAppButton = styled.a`
  text-align: center;
  text-decoration: none;
  margin-top: 2vh;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    display: flex-column;
    margin-top: 1vh;
    margin-left: 1vh;
  }
  :hover {
    // color: #5cf700; /* Cambia il colore al passaggio del mouse */
    transform: scale(1.2); /* Ingrandisci senza spostare gli altri elementi */
    transition: 0.3s;
    margin-left: 1vh;
  }
`;
const ContWaveUP = styled.div`
  width: 100%;
  position: relative;
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
const WhatsAppLink = ({ phoneNumber, message }) => {
  // Costruisci l'URL WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <WhatsAppButton
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#46eb00" }} />
    </WhatsAppButton>
  );
};

const Footer = () => {
  return (
    <Element name="contatti">
      <FooterContainer>
        <ContWaveUP>
          <svg viewBox="0 0 1800 120" preserveAspectRatio="none">
            <path
              d="M3000,70 C2850,50 2700,60 2550,30 C2400,0 2250,40 2100,20 C1950,-10 1800,0 0,50 V120 H3000 Z"
              className="shape-fill"
            ></path>
          </svg>{" "}
        </ContWaveUP>
        <Section>
          <h2>Contattaci!</h2>
          <Span>
            Riccardo
            <WhatsAppLink
              phoneNumber="393936582715"
              message="Ciao, ti scrivo dal tuo sito ed ho bisogno di un video potentissimo ."
            />
          </Span>
          <Span>
            Lorenzo
            <WhatsAppLink
              phoneNumber="393936582715"
              message="Ciao, ti scrivo dal tuo sito ed ho bisogno di un video potentissimo ."
            />
          </Span>
          <Span>info@azienda.com</Span>
        </Section>

        <Section>
          <h2>Seguici</h2>
          <SocialIcons>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#000" }} />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#FFD43B" }} />
            </a> */}
            <a
              href="https://www.instagram.com/sonarproductions_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#000" }} />{" "}
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#FFD43B" }} />{" "}
            </a> */}
          </SocialIcons>
        </Section>
      </FooterContainer>
    </Element>
  );
};

export default Footer;
