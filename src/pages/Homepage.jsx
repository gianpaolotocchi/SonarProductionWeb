import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

// Contenitore principale che occupa tutta la viewport
const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Occupa l'intera altezza della viewport */
  overflow: hidden; /* Impedisce al video di fuoriuscire dai bordi */
  position: relative; /* Per posizionare l'overlay sopra il video */
`;

// Wrapper per il video
const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

// Stile per il video stesso
const StyledYouTube = styled.div`
  width: 100%;
  height: 100%;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Fa sì che il video riempia il contenitore senza bordi */
  }
`;

// Overlay che copre tutto lo schermo
const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10; /* Sovrappone al video */
  
  /* Usa media queries per applicare lo stile solo su desktop */
  @media (min-width: 768px) {
    /* Rettangolo trasparente al centro con bordo colorato */
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border-top: ${props => props.$cover ? '23vh solid rgb(240, 197, 74)' : 'none'}; /* Bordo colorato, può essere cambiato */
      border-bottom: ${props => props.$cover ? '23vh solid rgb(240, 197, 74)' : 'none'}; /* Bordo colorato, può essere cambiato */
      border-left: ${props => props.$cover ? '10vh solid rgb(240, 197, 74)' : 'none'}; /* Bordo colorato, può essere cambiato */
      border-right: ${props => props.$cover ? '10vh solid rgb(240, 197, 74)' : 'none'}; /* Bordo colorato, può essere cambiato */
      box-sizing: border-box;
      
    }
      
  }
`;

const Homepage = () => {
  const playerRef = useRef(null);
  const [cover, setCover] = useState(false); // Stato per gestire la copertura
  const endTime = 81; // Tempo di fine del video in secondi
  const startTime = 60; // Tempo di inizio del video in secondi

  const opts = {
    height: '100%', // Altezza del video al 100% del contenitore
    width: '100%',  // Larghezza del video al 100% del contenitore
    playerVars: {
      autoplay: 1,       // Avvia il video automaticamente
      mute: 1,           // Imposta il video su muto
      controls: 0,       // Nasconde tutti i controlli
      modestbranding: 1, // Riduce il branding di YouTube
      rel: 0,            // Nasconde video consigliati
      fs: 0,             // Nasconde il pulsante di fullscreen
      start: startTime,  // Inizia il video da un tempo specifico
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        if (currentTime >= endTime) {
          playerRef.current.pauseVideo();
          setCover(true); // Imposta lo stato per coprire il video
          clearInterval(interval);
        }
      }
    }, 1000); // Controlla ogni secondo

    return () => clearInterval(interval);
  }, []);

  return (
    <HomepageContainer>
      <VideoWrapper>
        <StyledYouTube>
          <YouTube videoId="Vd2RlJJ-m0w" opts={opts} onReady={onReady} />
        </StyledYouTube>
        <VideoOverlay $cover={cover} /> {/* Passa lo stato come $cover */}
      </VideoWrapper>
    </HomepageContainer>
  );
}

export default Homepage;
