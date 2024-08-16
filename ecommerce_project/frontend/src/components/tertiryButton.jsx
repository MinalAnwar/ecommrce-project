import React from 'react';

const TertiryButton = ({ text, onClick, className = '' }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-400 text-white ${className}`}
      onClick={onClick}
    >
      <span className="relative px-5 py-2.5 rounded-md">
        {text}
      </span>
    </button>
  );
};

export default TertiryButton;
