import React from "react";
import styled from 'styled-components';

const ContainerSection = styled.div`
  position: relative;
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  flex-direction: column;
  padding: 2%;
`;

const Button = styled.button`
  background-color: rgb(240, 197, 74);
  color: #000;
  font-size: 0.8rem;
  padding: 1vh 2vh;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: absolute;

  &:hover {
    background-color: #000;
    color: rgb(240, 197, 74);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    
  }

  @media (max-width: 1440px) {
    font-size: 0.7rem;
    margin-right: 1vh;
    left: 85%;
    top: 85%;
  }

  @media (min-width: 1440px) {
    font-size: 0.7rem;
    margin-right: 1vh;
    left: 75%;
    bottom: -20%;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  margin-right: 4vh;
  color: #000;
  text-align: center
  position: absolute;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.7rem;
    padding: 0;
    top: 5%;
    right: 3%;
  }

  @media (max-width: 1440px) {
    width: 40%;
    font-size: 0.8rem;
    padding: 0;
    top: 5%;
    right: 3%;
  }
`;

const FootSection = () => {
  return (
    <ContainerSection>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde animi ratione sunt nemo dolore! Quae, optio? Nostrum quae iure ducimus? Molestiae magnam consectetur placeat odit nemo non vel necessitatibus animi?
      </Paragraph>
      <Button>View More</Button>
    </ContainerSection>
  );
};

export default FootSection;
