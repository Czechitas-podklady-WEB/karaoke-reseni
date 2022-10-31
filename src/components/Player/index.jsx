import React, { useEffect, useRef } from 'react';
import './style.css';

const Player = () => {
  const audioPlayer = useRef();
  
  const handleTogglePlay = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    } 
  }

  return (
    <>
      <audio ref={audioPlayer} src='fools-garden-lemon-tree.mp3' />
      <button onClick={handleTogglePlay}>Play</button>
    </>
  );
};

export default Player;
