import React, { useEffect, useRef } from 'react';

interface GameOverProps {
  score: number;
  onReplay: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, onReplay }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
      onReplay(); // Trigger replay
    };

    const button = buttonRef.current;
    if (button) {
      // Add touchend listener for mobile
      button.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    // Cleanup
    return () => {
      if (button) {
        button.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [onReplay]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white">
      <h1 className="text-2xl md:text-4xl mb-4">Game Over</h1>
      <div className="text-lg md:text-2xl mb-4">Score: {score}</div>
      <button
        ref={buttonRef}
        onClick={onReplay} // For desktop clicks
        className="px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl bg-cyan-500 hover:bg-cyan-600 rounded pointer-events-auto touch-none"
      >
        Replay
      </button>
    </div>
  );
};

export default GameOver;