"use client";
import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowLoading(false);
      }, 500); // This duration should match the CSS transition duration
    }, 1200);
  }, []);

  useEffect(() => {
    if (showLoading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showLoading]);

  if (!showLoading) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-[150] w-screen h-screen bg-[#111] flex flex-col gap-6 text-white items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="video-bg select-none !opacity-[0.09]" />
      <div className="spinner ">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      <h2 className="text-3xl ml-3">Loading...</h2>
    </div>
  );
};

export default LoadingScreen;
