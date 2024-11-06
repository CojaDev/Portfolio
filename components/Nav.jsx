"use client";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const nav = [
    {
      name: "Home",
      link: "#hero",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Works",
      link: "#works",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (showNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNav]);

  return (
    <nav
      className={`fixed z-50 text-white w-full py-5 transition-colors ${
        scrolled ? "bg-black/40" : "bg-transparent"
      }`}
    >
      <div
        className={`justify-between lg:flex hidden p-4 pl-6  max-w-[1700px] mx-auto w-full transition-all ${
          scrolled ? "py-0" : "py-11"
        } `}
      >
        <h2 className="text-[19px] my-auto">
          <span className="text-orange-300 brightness-90">Aleksandar</span> M.
        </h2>
        <div className="flex gap-5 items-center">
          {nav.map((nav, index) => (
            <button
              aria-label="Name"
              data-scroll-to
              data-scroll-to-href={nav.link}
              draggable={false}
              key={index}
              className="p-2 transition-all hover:underline underline-offset-2"
            >
              {nav.name}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`justify-between items-center transition-all lg:hidden flex p-8 relative ${
          scrolled ? "py-2" : "py-8"
        }`}
      >
        <h2 className="text-[19px] z-40">
          <span className="text-orange-300 brightness-90">Aleksandar</span> M.
        </h2>
        <div className="flex flex-col z-40">
          {!showNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        {showNav && (
          <div
            className="fixed left-0 top-0 w-screen h-screen flex flex-col items-center justify-center gap-5 bg-black/90"
            onScroll={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {nav.map((nav, index) => (
              <a
                href={nav.link}
                aria-label="Name"
                data-scroll-to
                data-scroll-to-href={nav.link}
                draggable={false}
                key={index}
                className="p-4 text-3xl"
                onClick={() => {
                  setShowNav(false);
                }}
              >
                {nav.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
