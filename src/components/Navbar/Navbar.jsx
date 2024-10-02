import React, { useState } from "react";
import styled from "styled-components";
import logoSonar from "../../assets/Media/Photo/logo-sonar.jpg";
import MenuLogo from "../../assets/Media/Photo/icons8-fotocamera-100.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #000;
  display: flex;
  align-items: center;
  color: white;
  z-index: 100;
  position: fixed;
  //   top: 0; /* Fissa la navbar nella parte superiore */
  //   left: 0; /* Allinea la navbar al lato sinistro */
  justify-content: space-between;
`;

const Logo = styled.img`
  widht: 90px;
  height: 90%;
  border-radius: 50%;
  margin-left: 2vh;
  cursor: pointer;
`;

const Menu = styled.img`
  widht: 100px;
  height: 90%;
  padding: 1vh;
  border-radius: 1vh;
  cursor: pointer;
  margin-right: 2vh;
`;

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo src={logoSonar} alt="" onClick={() => navigate("/")} />
      <Menu
        src={MenuLogo}
        alt=""
        onClick={() => props.setIsOpen(!props.isOpen)}
      />
    </Container>
  );
};

export default Navbar;
