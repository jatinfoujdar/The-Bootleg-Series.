// src/App.js
import React, { useState } from 'react';

function Bgchanges() {
  const [bgColor, setBgColor] = useState('bg-white');

  // const toggleBackgroundColor = () => {
  //   setBgColor(bgColor === 'bg-white' ? 'bg-blue-500' : 'bg-white');
  // };

   const toggleBackgroundColor = () => {
    const newColor = randomColor
    setBgColor(newColor);
  };

  const randomColor = ()=>{
    const colors = [
      'bg-red-500',
      'bg-green-500',
      'bg-blue-500',
      'bg-yellow-500',
      'bg-pink-500',
      'bg-purple-500',
      'bg-indigo-500',
      'bg-teal-500'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }



  return (
    <div className={`${bgColor} min-h-screen flex items-center justify-center`}>
      <button
        onClick={toggleBackgroundColor}
        className="px-4 py-2 font-semibold text-white bg-gray-800 rounded shadow-md hover:bg-gray-600"
      >
        Toggle Background Color
      </button>
    </div>
  );
}

export default Bgchanges;
