import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  position: relative; /* Rendi il container relativo per posizionare ContWaveUP */
`;

const TitlePage = styled.h1`
  color: #000;
  font-size: 3rem;
  text-align: center;
  padding-top: 8vh;
  margin: 0;
  z-index: 1; /* Assicurati che sia sopra a ContWaveUP */
  position: relative; /* Posizione relativa per mantenere l'ordine */
`;

const BodyText = styled.h4`
  text-align: center;
  padding: 7vh 15vh;
  z-index: 1; /* Assicurati che sia sopra a ContWaveUP */
  position: relative; /* Posizione relativa per mantenere l'ordine */
`;

const ContWaveUP = styled.div`
  width: 100%;
  position: absolute; /* Posizionamento assoluto */
  top: 0;
  left: 0;
  z-index: 0; /* Assicurati che sia sotto gli altri elementi */
  overflow: hidden; /* Nasconde tutto ciò che va oltre i bordi */
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 20vh;
    transform: rotate(180deg); /* Ruota la wave */
  }

  .shape-fill {
    fill: #ffc300;
  }
`;
const ContWaveDown = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  line-height: 0;
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 20vh;
  }

  .shape-fill {
    fill: #ffc300;
  }
`;

const WhoWeAre = () => {
  return (
    <Container>
      <ContWaveUP>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M3000,70 C2850,50 2700,60 2550,30 C2400,0 2250,40 2100,20 C1950,-10 1800,0 0,50 V120 H3000 Z"
            className="shape-fill"
          ></path>
        </svg>
      </ContWaveUP>

      <TitlePage>Chi siamo</TitlePage>
      <BodyText>
        Siamo un'azienda che si occupa di realizzare video professionali per
        qualsiasi esigenza, dal video aziendale al video musicale. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Expedita officia dolores,
        tempore autem voluptas, accusamus ipsa quos numquam aliquid nisi cum?
        Natus, delectus? Ipsa, ut! Dolore pariatur recusandae accusantium
        dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio non, at eaque reiciendis enim eum id dolor praesentium natus
        neque magnam consequatur animi dicta sit deleniti esse facere saepe
        sunt? Quas ducimus beatae eligendi labore maiores enim fuga rerum
        commodi voluptate at pariatur sequi deserunt laudantium obcaecati ipsa
        amet non inventore, sit laborum quia assumenda iure tempore numquam!
        Eaque, omnis. Officiis reprehenderit architecto asperiores? Magnam
        doloribus officia impedit autem nesciunt voluptate earum quia, sed
        adipisci vel ut eius consequatur delectus! Beatae consequuntur veniam
        hic exercitationem error? Distinctio neque deleniti officiis! Excepturi
        nesciunt incidunt neque aut quibusdam voluptatem quas odit nisi quidem,
        laboriosam ad debitis voluptatibus adipisci fuga, accusantium delectus
        perspiciatis libero beatae. Atque nulla molestias quasi maxime quibusdam
        inventore error? Totam, laudantium facere architecto distinctio nobis
        temporibus eos quidem excepturi quae itaque dolores nihil placeat
        veritatis laborum dolor modi aperiam doloribus doloremque culpa officia
        impedit amet? Aut quisquam recusandae veritatis! Excepturi ab, dolorum
        velit ratione expedita perferendis iure blanditiis sequi sint harum
        illum error! Aliquid, quod tenetur quasi aut quis vel harum officia, sit
        eum nulla perspiciatis voluptatem illum velit. Odit dolor deleniti porro
        at placeat vel et. Sunt quibusdam ratione minus provident ut totam!
        Maxime ut excepturi aut, voluptatibus voluptatum quas voluptates,
      </BodyText>
      <ContWaveDown>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M3000,70 C2850,50 2700,60 2550,30 C2400,0 2250,40 2100,20 C1950,-10 1800,0 0,50 V120 H3000 Z"
            className="shape-fill"
          ></path>
        </svg>
      </ContWaveDown>
    </Container>
  );
};

export default WhoWeAre;
