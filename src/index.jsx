import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="container">
      Karaoke
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
