'use client';
import React, { useRef, useEffect } from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaSass,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiThreedotjs,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import Image from 'next/image';

const About = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const buttonRef = useRef(null);
  const leftsRef = useRef(null);
  const rightsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-up');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const elements = [boxRef.current, buttonRef.current];
    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    const handleLeftsIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-left');
          observer.unobserve(entry.target);
        }
      });
    };

    const leftsObserver = new IntersectionObserver(
      handleLeftsIntersection,
      observerOptions
    );

    if (leftsRef.current) {
      leftsObserver.observe(leftsRef.current);
    }

    const handleRightsIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-right');
          observer.unobserve(entry.target);
        }
      });
    };

    const rightsObserver = new IntersectionObserver(
      handleRightsIntersection,
      observerOptions
    );

    if (rightsRef.current) {
      rightsObserver.observe(rightsRef.current);
    }

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
      if (leftsRef.current) {
        leftsObserver.unobserve(leftsRef.current);
      }
      if (rightsRef.current) {
        rightsObserver.unobserve(rightsRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section h-full w-screen xl:p-8 p-4 text-white relative flex flex-col items-center mt-10 overflow-x-hidden transition-all"
    >
      <div ref={boxRef} className="box text-center mb-8 transition-all">
        <h2 className="text-5xl md:text-8xl text-orange-300">
          Crafting Digital Experiences
        </h2>
        <p className="text-xl mt-4">
          Creating immersive web experiences with a focus on performance and
          user engagement.
        </p>
        <p className="text-xl mt-4">
          From responsive design to server-side logic, I've got you covered.
        </p>
      </div>

      <div
        ref={leftsRef}
        className="lefts mb-16 mt-6 flex items-center text-orange-300 select-none justify-center sm:text-[20rem] text-[10rem] h-80 transition-all"
      >
        <p className="">{'<'}</p>
        <Image
          width={1080}
          height={1437}
          src="/img/me.jpg"
          draggable="false"
          alt="Aleksandar Marcetic"
          className="w-72 h-72 object-cover rounded-md"
          loading="lazy"
        />
        <p className="">{'>'}</p>
      </div>

      <div
        ref={rightsRef}
        className="rights w-full flex flex-col items-center mb-8 transition-all"
      >
        <h3 className="text-3xl mb-4">Technologies I Use</h3>
        <div className="flex flex-wrap justify-center mb-4 sm:max-w-[1100px]">
          <div className="flex items-center m-4">
            <FaHtml5 className="text-orange-600 text-5xl" />
            <span className="ml-2 text-xl">HTML5</span>
          </div>
          <div className="flex items-center m-4">
            <FaCss3Alt className="text-blue-600 text-5xl" />
            <span className="ml-2 text-xl">CSS3</span>
          </div>
          <div className="flex items-center m-4">
            <FaJsSquare className="text-yellow-500 text-5xl" />
            <span className="ml-2 text-xl">JavaScript</span>
          </div>
          <div className="flex items-center m-4">
            <FaBootstrap className="text-purple-600 text-5xl" />
            <span className="ml-2 text-xl">Bootstrap 5</span>
          </div>
          <div className="flex items-center m-4">
            <FaSass className="text-pink-500 text-5xl" />
            <span className="ml-2 text-xl">Sass</span>
          </div>
          <div className="flex items-center m-4">
            <FaReact className="text-blue-500 text-5xl" />
            <span className="ml-2 text-xl">React</span>
          </div>
          <div className="flex items-center m-4">
            <SiNextdotjs className="text-black text-5xl invert" />
            <span className="ml-2 text-xl">Next.js</span>
          </div>
          <div className="flex items-center m-4">
            <SiThreedotjs className="text-green-500 text-5xl" />
            <span className="ml-2 text-xl">Three.js</span>
          </div>
          <div className="flex items-center m-4">
            <Image
              width={48}
              height={48}
              src="/img/gsap.svg"
              draggable="false"
              alt="gsap"
              className="max-w-[3rem] w-[3rem] h-[3.4rem]"
            />
            <span className="ml-2 text-xl">GSAP</span>
          </div>
          <div className="flex items-center m-4">
            <SiTailwindcss className="text-blue-400 text-5xl" />
            <span className="ml-2 text-xl">TailwindCSS</span>
          </div>
          <div className="flex items-center m-4">
            <TbBrandReactNative className="text-white text-5xl" />
            <span className="ml-2 text-xl">React Native</span>
          </div>
          <div className="flex items-center m-4">
            <SiMongodb className="text-green-600 text-5xl" />
            <span className="ml-2 text-xl">MongoDB</span>
          </div>
        </div>
      </div>
      <a
        ref={buttonRef}
        href="/cv/cv_Aleksandar_Marcetic.pdf"
        download
        className="border-2 border-orange-300 px-9 py-2.5 text-lg -mt-5 transition-all hover:bg-transparent bg-orange-300 hover:text-orange-300 text-black rounded-full"
      >
        Download CV
      </a>
    </section>
  );
};

export default About;
