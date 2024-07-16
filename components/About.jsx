'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const buttonRef = useRef(null);
  const leftsRef = useRef(null);
  const rightsRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Section-wide animation
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.9, scale: 0.97, y: 150 },
        {
          opacity: 1,
          scale: 0.91,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 120%',
            end: 'bottom -110%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Individual elements
      gsap.fromTo(
        boxRef.current,
        { opacity: 0.8, y: 80 },
        {
          opacity: 1,
          y: -20,
          duration: 0.6,
          scrollTrigger: {
            trigger: boxRef.current,
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      gsap.fromTo(
        leftsRef.current,
        { opacity: 0.9, x: -150 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: leftsRef.current,
            start: 'top 100%',
            end: 'bottom 80%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      gsap.fromTo(
        rightsRef.current,
        { opacity: 0.9, x: 150 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: rightsRef.current,
            start: 'top 100%',
            end: 'bottom 95%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0.9, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 112%',
            end: 'top 106%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, sectionRef);
  }, [gsap]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section h-full w-screen xl:p-8 p-4 text-white relative flex flex-col items-center mt-10 overflow-hidden"
    >
      <div ref={boxRef} className="box text-center mb-8">
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
        className="lefts mb-16 mt-6 flex items-center text-orange-300 select-none justify-center sm:text-[20rem] text-[10rem] h-80"
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
        className="rights w-full flex flex-col items-center mb-8"
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
