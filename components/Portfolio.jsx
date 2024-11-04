"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Monitor from "./Monitor";
import { Phone } from "./Phone";
import { projects } from "../constants/projects";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaSass,
  FaCcStripe,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiThreedotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiShadcnui,
  SiCloudinary,
  SiExpo,
  SiNextdns,
  SiClerk,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GrDomain } from "react-icons/gr";

const ICONS = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJsSquare: <FaJsSquare />,
  FaBootstrap: <FaBootstrap />,
  FaSass: <FaSass />,
  FaCcStripe: <FaCcStripe />,
  SiNextdotjs: <SiNextdotjs />,
  SiThreedotjs: <SiThreedotjs />,
  SiTailwindcss: <SiTailwindcss />,
  SiMongodb: <SiMongodb />,
  SiTypescript: <SiTypescript />,
  SiShadcnui: <SiShadcnui />,
  SiCloudinary: <SiCloudinary />,
  SiExpo: <SiExpo />,
  SiNextdns: <SiNextdns />,
  SiClerk: <SiClerk />,
  TbBrandReactNative: <TbBrandReactNative />,
  GrDomain: <GrDomain />,
};

function Model({ children }) {
  const group = useRef();
  const { mouse } = useThree();
  const [targetRotation, setTargetRotation] = useState([0, 0, 0]);

  useFrame(() => {
    if (group.current) {
      const speed = 0.05;
      group.current.rotation.y +=
        (targetRotation[1] - group.current.rotation.y) * speed;
      group.current.rotation.x +=
        (targetRotation[0] - group.current.rotation.x) * speed;
    }
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 2 - 1;
      const y = -(clientY / innerHeight) * 2 + 1;
      setTargetRotation([y * -0.1, x * 0.1, 0]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <group ref={group}>{children}</group>;
}

function ScrollableImage({ src, alt, isPhone }) {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const maxScroll = container.scrollHeight - container.clientHeight;
      const newPosition = (container.scrollTop / maxScroll) * 100;
      setScrollPosition(newPosition);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const container = containerRef.current;
    if (container) {
      if (isPhone) {
        container.scrollTop += e.deltaY * 7;
      } else container.scrollTop += e.deltaY * 10;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-y-scroll overflow-x-hidden w-full h-full ${
        isPhone ? "rounded-[10px]" : ""
      }`}
      onScroll={handleScroll}
      style={{ scrollBehavior: "smooth" }}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full object-cover"
        width={400}
        height={1200}
      />
      <div
        className="absolute right-2 top-2 bottom-2 w-1 bg-gray-300 rounded"
        style={{ opacity: scrollPosition > 0 ? 1 : 0 }}
      >
        <div
          className="w-full bg-gray-600 rounded"
          style={{
            height: `${scrollPosition}%`,
            transition: "height 0.1s",
          }}
        />
      </div>
    </div>
  );
}

function ScrollableIframe({ src, title, isPhone }) {
  const iframeRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        {
          type: "wheel",
          deltaY: isPhone ? e.deltaY * 7 : e.deltaY * 10,
        },
        "*"
      );
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (iframe) {
        iframe.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      className={`w-full h-full select-none ${
        isPhone ? "overflow-hidden rounded-[10px]" : ""
      }`}
      width={432}
      height={768}
      title={title}
      style={{ border: "none" }}
    />
  );
}

export default function Portfolio() {
  const [scrollSpeed, setScrollSpeed] = useState("-0.2");
  const [scrollSpeed2, setScrollSpeed2] = useState("0.35");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setScrollSpeed("0");
        setScrollSpeed2("0");
      } else {
        setScrollSpeed("-0.2");
        setScrollSpeed2("0.35");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="works"
      className="relative w-screen min-h-screen flex gap-5 flex-col items-center"
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex w-full xl:flex-row flex-col items-center gap-2 my-10 relative`}
        >
          <div
            className={`xl:min-w-[40%] xl:w-[40%] w-full flex flex-col justify-center text-white p-6 ${
              index % 2 === 0
                ? "2xl:pl-40 lg:pl-10 2xl:mr-0 lg:-mr-10"
                : "2xl:pr-40 lg:pr-10 2xl:ml-0 lg:-ml-10"
            } space-y-4`}
            data-scroll
            data-scroll-speed={scrollSpeed}
          >
            <h2 className="text-5xl font-bold sm:text-left text-center">
              {project.title}
            </h2>
            <p
              className={`text-lg opacity-85 sm:text-justify text-center sm:pr-16 pr-0`}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 sm:justify-normal justify-center">
              {project.technologies.map((tech, i) => (
                <div key={i} className="flex items-center my-2 mr-3">
                  {React.cloneElement(ICONS[tech.icon], {
                    className: `text-orange-300 text-4xl`,
                  })}
                  <span className="ml-2 text-xl">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 flex gap-2 sm:mx-0 mx-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-orange-400 text-black font-medium text-center rounded-lg hover:bg-orange-300 transition"
              >
                {project.onlyMobile ? "Visit GitHub Page" : "Visit Site"}
              </a>
              {!project.onlyMobile && (
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-white/90 font-medium text-center rounded-lg transition hover:underline"
                >
                  GitHub Page
                </a>
              )}
            </div>
          </div>

          {project.onlyMobile ? (
            <div
              className="xl:w-[32%] 2xl:w-[23%] lg:w-[50%] xl:mt-32 mt-5 flex justify-center mx-auto items-center"
              data-scroll
              data-scroll-speed={scrollSpeed2}
            >
              <Image
                src={project.imageUrl}
                width={366}
                height={757}
                draggable={false}
                alt={project.title}
                className="w-[65%] my-10 h-full object-cover rounded-md"
              />
            </div>
          ) : (
            <>
              <div
                className={`min-h-screen h-screen xl:max-w-[60%] w-full flex-1 xl:flex hidden justify-center items-center ${
                  index % 2 === 0
                    ? "2xl:mr-0 lg:mr-10"
                    : "2xl:ml-0 lg:ml-10 xl:order-first"
                } ${index % 2 === 0 ? "" : ""}`}
                data-scroll
                data-scroll-speed={scrollSpeed2}
              >
                <Canvas
                  gl={{ pixelRatio: 0.2 }}
                  camera={{ position: [0, 0, 7], fov: 100 }}
                >
                  <pointLight position={[10, 10, 10]} intensity={1.5} />
                  <ambientLight intensity={1.5} />

                  <Model>
                    <group position={[-2, -2.3, 0]}>
                      <Monitor>
                        {project.monitorImg ? (
                          <ScrollableImage
                            src={project.monitorImg}
                            alt={project.title}
                            isPhone={false}
                          />
                        ) : (
                          <ScrollableIframe
                            src={project.monitorUrl}
                            title={project.title}
                            isPhone={false}
                          />
                        )}
                      </Monitor>
                      <Phone
                        position={[4.6, 2.4, 3]}
                        rotation={[0, Math.PI, 0]}
                        scale={0.044}
                      >
                        {project.mobileImg ? (
                          <ScrollableImage
                            src={project.mobileImg}
                            alt={project.title}
                            isPhone={true}
                          />
                        ) : (
                          <ScrollableIframe
                            src={project.phoneUrl}
                            title={project.title}
                            isPhone={true}
                          />
                        )}
                      </Phone>
                    </group>
                  </Model>

                  <ContactShadows
                    position={[0, -3.5, 0]}
                    scale={20}
                    blur={2}
                    far={4.5}
                  />
                </Canvas>
              </div>

              <div className="xl:w-[70%] 2xl:w-full lg:w-[50%] mt-5 flex xl:hidden justify-center items-center">
                <Image
                  src={project.imageUrl}
                  width={366}
                  height={757}
                  draggable={false}
                  alt={project.title}
                  className="w-[65%] h-full my-20 object-cover rounded-md"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
