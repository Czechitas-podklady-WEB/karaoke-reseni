import React, { useEffect, useRef } from 'react';
import './style.css';

const Player = ({ src, onTimeUpdate }) => {
  const audioPlayer = useRef();

  useEffect(() => {
    audioPlayer.current.addEventListener('timeupdate', onTimeUpdate);
    return () => audioPlayer.current.removeEventListener('timeupdate', onTimeUpdate);
  }, [onTimeUpdate]);

  const handleTogglePlay = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    } 
  }

  return (
    <>
      <audio ref={audioPlayer} src={src} />
      <div className="player-controls">
        <button className="play-button" onClick={handleTogglePlay}>Play</button>
      </div>
    </>
  );
};

export default Player;
