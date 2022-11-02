import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const audioPlayer = useRef();

  const handleTimeUpdate = (e) => {
    onTimeUpdate(e.target.currentTime);
  }

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
      <audio ref={audioPlayer} src={src} onTimeUpdate={handleTimeUpdate} />
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
