import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const links = [
    {
      name: 'Home',
      link: '#hero',
    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Works',
      link: '#works',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const socials = [
    {
      name: 'GitHub',
      link: 'https://github.com/CojaDev',
      img: '/img/github.png',
    },
    {
      name: 'Gmail',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=amarcetic04@gmail.com',
      img: '/img/gmail.png',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aleksandar-marcetic-b47483202/',
      img: '/img/linkedin.png',
    },
  ];

  return (
    <footer className=" select-none overflow-hidden w-screen flex flex-col justify-center items-center border-t border-gray-500/10 shadow-lg gap-10 bg-gradient-to-r from-[#111]/70 via-gray-800/70 to-[#111]/70 py-10 mt-10">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-5xl text-white font-bold">
          <span className="text-orange-300">Aleksandar</span> M.
        </h2>
        <div className="flex gap-6 justify-center">
          {socials.map((social, index) => (
            <a
              href={social.link}
              aria-label={social.name}
              draggable={false}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="transition-transform transform hover:scale-110"
            >
              <Image
                src={social.img}
                alt={social.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </a>
          ))}
        </div>
        <div className="flex gap-6 justify-center text-white text-lg">
          {links.map((link, index) => (
            <button
              aria-label={link.name}
              data-scroll-to
              data-scroll-to-href={link.link}
              draggable={false}
              key={index}
              className="transition-all hover:underline underline-offset-4"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
      <p className="text-center select-none text-lg text-white opacity-80">
        ©2024 Aleksandar M. | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
