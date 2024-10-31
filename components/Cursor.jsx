"use client";
import React, { useState, useEffect, useRef } from "react";

const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

const Cursor = ({ color }) => {
  const [bg, setBG] = useState("transparent");
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const updateMousePosition = (ev) => {
    setTimeout(() => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    }, 76);
  };

  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  const throttledMouseMove = useRef(throttle(updateMousePosition, 10)).current;
  const throttledScroll = useRef(throttle(updateScrollPosition, 10)).current;

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", throttledMouseMove);
    window.addEventListener("scroll", throttledScroll);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const buttons = document.querySelectorAll("button");
    const links = document.querySelectorAll("a");
    const inputs = document.querySelectorAll("input");
    const textAreas = document.querySelectorAll("textarea");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseDown);
      button.addEventListener("mouseleave", handleMouseUp);
    });
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseDown);
      link.addEventListener("mouseleave", handleMouseUp);
    });
    inputs.forEach((input) => {
      input.addEventListener("mouseenter", handleMouseDown);
      input.addEventListener("mouseleave", handleMouseUp);
    });
    textAreas.forEach((textArea) => {
      textArea.addEventListener("mouseenter", handleMouseDown);
      textArea.addEventListener("mouseleave", handleMouseUp);
    });

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseDown);
        button.removeEventListener("mouseleave", handleMouseUp);
      });
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseDown);
        link.removeEventListener("mouseleave", handleMouseUp);
      });
      inputs.forEach((input) => {
        input.removeEventListener("mouseenter", handleMouseDown);
        input.removeEventListener("mouseleave", handleMouseUp);
      });
      textAreas.forEach((textArea) => {
        textArea.removeEventListener("mouseenter", handleMouseDown);
        textArea.removeEventListener("mouseleave", handleMouseUp);
      });
    };
  }, [throttledMouseMove, throttledScroll]);

  const cursorStyle = {
    top: `${mousePosition.y + scrollPosition}px`,
    left: `${mousePosition.x}px`,
    transform: `translate(-50%, -50%)`, // Center the cursor
    borderColor: `${isClicked ? "transparent" : color}`,
    zIndex: 100,
  };

  return (
    <div
      className="border-2 w-8 h-8 rounded-full absolute pointer-events-none opacity-50 md:flex hidden"
      style={cursorStyle}
    >
      <div
        className={`w-full h-full rounded-full transition-all border-2  ${
          isClicked ? "animate-fill" : "animate-unfill"
        }`}
        style={{ scale: 2, borderColor: color, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Cursor;
