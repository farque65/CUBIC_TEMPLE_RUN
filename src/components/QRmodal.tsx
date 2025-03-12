import React from 'react';

interface QRModalProps {
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ onClose }) => {
  // Example QR code URL (replace with your desired URL)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    'https://cubic-temple-run.vercel.app/'
  )}`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-xl md:text-2xl mb-4 text-black">Scan to Play</h2>
        <img src={qrCodeUrl} alt="QR Code" className="w-32 h-32 md:w-40 md:h-40 mb-4" />
        <button
          onClick={onClose}
          className="px-4 py-2 text-lg bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QRModal;