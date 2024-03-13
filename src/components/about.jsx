import React from 'react';

function About() {
  return (
    <div className="h-screen relative">
      {/* Video background */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src="/finalvideoabout.mp4" type="video/mp4" />
        {/* Add additional source tags for other video formats if needed */}
      </video>

      {/* Content */}
      <div className="h-full relative flex justify-start items-center w-full z-100">
        <div className="text w-1/2 h-full bg-opacity-70 backdrop:blur-10 text-white text-justify px-24 py-12 text-xl p-3 flex justify-center items-center flex-col bg-gradient-to-r from-black to-transparent">
          <div className="text-5xl text-white">Welcome to Solero</div> <br />
          Your ultimate destination for premium tiles that redefine spaces. From
          captivating wall tiles to sleek kitchen and bathroom tiles, and the
          timeless elegance of our floor tiles, we offer a diverse range to suit
          every taste. Our collection includes versatile ceramic tiles, warm and
          inviting wooden tiles, and a variety of room-enhancing options. At
          Solero, we blend artistry with functionality to bring you the finest
          quality tiles that not only elevate your surroundings but also stand
          the test of time. Explore the possibilities with Solero, where every
          tile tells a story of style, durability, and innovation.
        </div>
      </div>
    </div>
  );
}

export default About;
