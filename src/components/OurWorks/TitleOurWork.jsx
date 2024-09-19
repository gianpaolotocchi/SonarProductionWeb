import React from "react";

import styled from "styled-components";

const ContentSection = styled.div`
  height: auto;
  width: 100%;
  background-color: transparent;

  margin: 0;
  position: relative;
  overflow: hidden;
`;

const TitleOur = styled.h1`
  position: relative;
  z-index: 2;

  color: #ffc300;
  font-size: 3.5rem;
  // text-align: start;
  margin: 2vh 0 2vh 6vw;

  @media (max-width: 768px) {
    margin: 2vh 0 0 6vw;
  }
`;

const TitleWork = styled.h2`
  position: relative;
  z-index: 2;
  color: #000;
  margin: 0;
  margin-left: 10vw;
  font-size: 3rem;

  @media (max-width: 768px) {
    margin-left: 15vw;
  }
`;

const TitleOurWork = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   const triggerPoint = window.innerHeight * 0.2;
  //   setIsVisible(scrollPosition > triggerPoint);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <ContentSection>
      <TitleOur>Our</TitleOur>
      <TitleWork>Works</TitleWork>
    </ContentSection>
  );
};

export default TitleOurWork;

// TODO creare animazione con titoli che entrano dall alto o nda des
