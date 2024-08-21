import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cards = [
  { id: 1, image: '/static/Assets/images/carousel1.avif' },
  { id: 2, image: '/static/Assets/images/carousel2.avif' },
  { id: 3, image: '/static/Assets/images/carousel3.avif' },
];

function Carousel (){
  const [middleCardIndex, setMiddleCardIndex] = useState(0);

  const autoChangeCard = () => {
    setMiddleCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(autoChangeCard, 5000);
    return () => clearInterval(interval);
  }, []);

  const leftCardIndex = (middleCardIndex - 1 + cards.length) % cards.length;
  const rightCardIndex = (middleCardIndex + 1) % cards.length;

  return (
    <div className="relative flex items-center mt-20 justify-center w-full h-full overflow-hidden">
      <motion.div
        className="absolute w-48 h-64 flex items-center justify-center "
        initial={{ scale: 0.9, x: -250 }}
        style={{ zIndex: 1 }}
      >
        <img
          src={cards[leftCardIndex].image}
          alt="No Image"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.div
        className="relative w-72 h-96 flex items-center justify-center animate-fadeOut"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        whileHover={{ scale: 1.6 }}
        style={{ zIndex: 2 }} 
      >
        <img
          src={cards[middleCardIndex].image}
          alt="No Image"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.div
        className="absolute w-48 h-64 flex items-center justify-center"
        initial={{ scale: 0.9, x: 250 }}
        style={{ zIndex: 1 }}
      >
        <img
          src={cards[rightCardIndex].image}
          alt="No Image"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Carousel;
