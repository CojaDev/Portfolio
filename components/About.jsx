"use client";
import React from "react";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiThreedotjs,
} from "react-icons/si";

const SkillIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center">
    <Icon className="text-4xl text-orange-300 mb-2" />
    <span className=" text-gray-200">{name}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold md:ml-12 md:text-left text-center  text-white mb-12">
          About <span className="text-orange-300">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-full md:w-1/3 flex items-center">
            <p className="text-orange-300 lg:text-9xl md:text-7xl text-9xl transition-all">
              {"<"}
            </p>
            <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-orange-300">
              <Image
                src="/img/me.jpg"
                alt="Aleksandar Marcetic"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-orange-300 lg:text-9xl md:text-7xl text-9xl transition-all">
              {">"}
            </p>
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <h3 className="text-3xl font-semibold text-white">
              Full-Stack Developer & Software Developer
            </h3>
            <p className="text-gray-200">
              Hi, I'm Aleksandar Marcetic, a passionate developer focused on
              creating seamless and engaging user experiences. I specialize in
              building responsive, high-performance web applications that
              combine great design with intuitive functionality.
            </p>
            <p className="text-gray-200">
              My expertise spans both front-end and back-end technologies,
              allowing me to deliver comprehensive solutions that meet modern
              web development standards.
            </p>
            <a
              href="/cv/cv_Aleksandar_Marcetic.pdf"
              download
              className="inline-block px-6 py-3 bg-orange-300 text-black font-semibold rounded-full hover:bg-orange-300/85 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-16 mb-16">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">
            My Skills
          </h3>
          <div className="w-[75%] grid grid-cols-3 md:grid-cols-5 gap-8 mx-auto ">
            <SkillIcon Icon={FaJsSquare} name="JavaScript" />
            <SkillIcon Icon={FaReact} name="React" />
            <SkillIcon Icon={SiNextdotjs} name="Next.js" />
            <SkillIcon Icon={FaNodeJs} name="Node.js" />
            <SkillIcon Icon={FaHtml5} name="HTML5" />
            <SkillIcon Icon={FaCss3Alt} name="CSS3" />
            <SkillIcon Icon={SiTailwindcss} name="Tailwind CSS" />
            <SkillIcon Icon={SiMongodb} name="MongoDB" />
            <SkillIcon Icon={SiThreedotjs} name="Three.js" />
            <SkillIcon Icon={SiTypescript} name="TypeScript" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
