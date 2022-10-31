import React from 'react';
import { createRoot } from 'react-dom/client';
import Player from './components/Player';
import './style.css';

const App = () => {
  return (
    <div className="container">
      Karaoke
      <Player />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
