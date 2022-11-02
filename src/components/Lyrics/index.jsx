import React, { useEffect, useRef } from 'react';
import './style.css';

const Lyrics = ({ lines, currentLineIndex }) => {
  const currentLineRef = useRef();

  useEffect(() => {
    if (currentLineRef.current !== undefined) {
      console.log('effet', currentLineRef.current);
      currentLineRef.current.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [currentLineIndex]);

  return (
    <div className="lyrics">
      {
        lines.map((line, idx) => (
          <p 
            ref={idx === currentLineIndex ? currentLineRef : undefined}
            className={idx === currentLineIndex ? 'current-line' : ''}
          >
            {line.text}
          </p>
        ))
      }
    </div>
  );
};

export default Lyrics;
