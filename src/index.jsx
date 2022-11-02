import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import lines from './lyrics-lines';
import Lyrics from './components/Lyrics';
import Player from './components/Player';
import './style.css';

const getCurrentLineIndex = (lines, time) => {
  return lines.findLastIndex((line) => line.time < (time + 1));
}

const App = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);

  const handleTimeUpdate = (e) => {
    const index = getCurrentLineIndex(lines, e.target.currentTime);
    if (index !== currentLineIndex) {
      console.log(e.target.currentTime, index);
      setCurrentLineIndex(index);
    }
  };

  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player src="fools-garden-lemon-tree.mp3" onTimeUpdate={handleTimeUpdate}/>
      <Lyrics lines={lines} currentLineIndex={currentLineIndex} />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
