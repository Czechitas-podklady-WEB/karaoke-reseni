import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const audioPlayer = useRef();

  useEffect(() => {
    audioPlayer.current.addEventListener('timeupdate', onTimeUpdate);
    return () => audioPlayer.current.removeEventListener('timeupdate', onTimeUpdate);
  }, [onTimeUpdate]);

  useEffect(() => {
    if (playing) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [playing])

  const handleTogglePlay = () => {
    setPlaying(!playing);
  }

  return (
    <>
      <audio ref={audioPlayer} src={src} />
      <div className="player-controls">
        <button 
          className={`play-button ${playing ? 'pause' : 'play'}`}
          onClick={handleTogglePlay}
        />
      </div>
    </>
  );
};

export default Player;
