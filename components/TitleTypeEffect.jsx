'use client';
import React from 'react';
import { ReactTyped } from 'react-typed';

const TitleTypeEffect = () => {
  const variables = ['Web Developer', 'Software Developer'];
  return (
    <div className="h-[5.2rem] sm:mb-10 mb-3 ">
      <h1 className="lg:text-[5.2rem] md:text-5xl text-4xl text-center  ">
        {'</'} I am a{' '}
        <span className="text-orange-300">
          <ReactTyped strings={variables} typeSpeed={120} backSpeed={30} loop />
        </span>
        {'>'}
      </h1>
    </div>
  );
};

export default TitleTypeEffect;
