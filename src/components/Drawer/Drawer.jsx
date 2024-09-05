import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const VerticalContainer = styled.div`
  position: fixed;
  top: 6%;
  right: 0;
  height: 10vh;
  width: 100%;
  background-color: #000;
  z-index: 100;
  padding: 0em 2em;
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
        <div>
          <NavLink
            style={{
              color: "#ffc300", // Cambia il colore se il link è attivo
              textDecoration: "none", // Rimuove la sottolineatura
            }}
            to="/"
          >
            Homepage
          </NavLink>
        </div>
        <NavLink
          style={{
            color: "#ffc300", // Cambia il colore se il link è attivo
            textDecoration: "none", // Rimuove la sottolineatura
          }}
          to="/contatti"
        >
          Contatti
        </NavLink>
      </ContainerLink>
    </VerticalContainer>
  );
};

export default Drawer;
