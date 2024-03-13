import React, { useState, useEffect } from 'react';

const Images = [
  '/slider1.png',
  '/slider2.jpg',
  '/slider2.jpg',
  '/slider4.jpeg',
];

function Slider() {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index, reset to 0 if it reaches the end of the array
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % Images.length);
        setFadeOut(false);
      }, 500); // SetTimeout for 500ms to wait for the fade-out effect to complete
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <div className="slider-containerbig text-3xl relative">
      <div className="bg-[rgb(255, 255, 255)] backdrop-opacity-25 text-[150px] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-extrabold border-8 p-16">
        Solero
      </div>
      <div className="text-3xl bg-cover h-screen overflow-hidden">
        <img
          src={Images[index]}
          alt=""
          className={` scaling-image w-full h-full transition-all duration-500 object-cover bg-center object-center ${
            fadeOut ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
      </div>
    </div>
  );
}

export default Slider;
