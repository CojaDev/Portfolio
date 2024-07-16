'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
const MyStars = ({ ...props }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <Stars fade {...props} />
    </Canvas>
  );
};

export default MyStars;
