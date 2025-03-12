import React, { useEffect, useRef } from 'react';

interface GameOverProps {
  score: number;
  onReplay: () => void;
  onShowQR: () => void; // New prop to trigger QR modal
}

const GameOver: React.FC<GameOverProps> = ({ score, onReplay, onShowQR }) => {
  const replayButtonRef = useRef<HTMLButtonElement>(null);
  const qrButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleReplayTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      onReplay();
    };

    const handleQRTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      onShowQR();
    };

    const replayButton = replayButtonRef.current;
    const qrButton = qrButtonRef.current;

    if (replayButton) {
      replayButton.addEventListener('touchend', handleReplayTouchEnd, { passive: false });
    }
    if (qrButton) {
      qrButton.addEventListener('touchend', handleQRTouchEnd, { passive: false });
    }

    return () => {
      if (replayButton) {
        replayButton.removeEventListener('touchend', handleReplayTouchEnd);
      }
      if (qrButton) {
        qrButton.removeEventListener('touchend', handleQRTouchEnd);
      }
    };
  }, [onReplay, onShowQR]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white">
      <h1 className="text-2xl md:text-4xl mb-4">Game Over</h1>
      <div className="text-lg md:text-2xl mb-4">Score: {score}</div>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          ref={replayButtonRef}
          onClick={onReplay}
          className="px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl bg-cyan-500 hover:bg-cyan-600 rounded pointer-events-auto touch-none"
        >
          Replay
        </button>
        <button
          ref={qrButtonRef}
          onClick={onShowQR}
          className="px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl bg-green-500 hover:bg-green-600 rounded pointer-events-auto touch-none"
        >
          Show QR Code
        </button>
      </div>
    </div>
  );
};

export default GameOver;