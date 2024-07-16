import React from 'react';
import TitleTypeEffect from './TitleTypeEffect';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen h-[100dvh] max-h-[100dvh] overflow-hidden relative"
    >
      <div className="absolute z-40 w-full h-full flex flex-col gap-2 justify-center items-center text-white">
        <h2 className="text-md md:text-lg lg:text-xl ">
          My name is <span className="text-orange-300">Aleksandar</span> and
        </h2>
        <TitleTypeEffect />
        <button
          aria-label="Name"
          data-scroll-to
          data-scroll-to-href="#contact"
          className="border-2 border-orange-300 px-9 py-2.5 text-lg -mt-5 transition-all hover:bg-transparent bg-orange-300 hover:text-orange-300 text-black rounded-full"
        >
          Hire Me
        </button>
      </div>
      <button
        aria-label="Name"
        className="absolute bottom-5 md:left-[49.2%] left-[46.2%] z-40 -translate-x-2/4 "
        data-scroll
        data-scroll-speed="0.3"
        data-scroll-to
        data-scroll-sticky
        data-scroll-to-href="#about"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="size-9 animate-bounce text-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <div
        className="bg overflow-hidden absolute top-0 left-0 w-screen h-screen z-20"
        data-scroll
        data-scroll-speed="0.3"
      >
        <div className="video-bg select-none " />
        <video
          src="/videos/coding.mp4"
          className="w-full h-full object-cover "
          muted
          autoPlay
          loop
        ></video>
      </div>
    </section>
  );
};

export default Hero;
