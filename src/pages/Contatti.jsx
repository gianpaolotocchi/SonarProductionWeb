import React from "react";
import styled from "styled-components";

const ContattiContainer = styled.div`
  display: flex;
  background-color: pink;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const Contatti = () => {
  return <ContattiContainer>Sono una pagina di contatti</ContattiContainer>;
};

export default Contatti;
