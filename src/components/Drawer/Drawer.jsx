import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const VerticalContainer = styled.div`
  position: fixed;
  top: 6%;
  right: 0;
  height: 10vh;
  width: 100%;
  background-color: #000;
  opacity: 0.9;
  z-index: 100;
  padding: 0;
`;

const ContainerLink = styled.div`
  display: flex;
  background-color: transparent;
  color: #ffc300;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Drawer = () => {
  return (
    <VerticalContainer>
      <ContainerLink>
        <Link
          to="chiSiamo"
          smooth={true} // Attiva lo scrolling fluido
          duration={1400} // Durata della transizione in millisecondi (1400ms)
          style={{
            color: "#ffc300",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Chi Siamo
        </Link>
        <Link
          to="OurWorks"
          smooth={true} // Attiva lo scrolling fluido
          duration={1400} // Durata della transizione in millisecondi (1400ms)
          style={{
            color: "#ffc300",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Lavori
        </Link>
        <Link
          to="contatti"
          smooth={true} // Attiva lo scrolling fluido
          duration={1400} // Durata della transizione in millisecondi (1400ms)
          style={{
            color: "#ffc300",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Contatti
        </Link>
      </ContainerLink>
    </VerticalContainer>
  );
};

export default Drawer;
