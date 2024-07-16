'use client';
import { Html, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

const Monitor = ({ children }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/monitor.glb');

  return (
    <group dispose={null} ref={group}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.88}>
        <group rotation={[Math.PI / 2, Math.PI, 0]} scale={0.005}>
          <group position={[-0.106, 358.788, -251.948]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plano001_Base_0.geometry}
              material={materials.Base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plano001_Screen_0.geometry}
              material={materials.Screen}
            >
              <Html
                className="content"
                position={[0, 2.85, 0]}
                rotation={[0, Math.PI, 0]}
                transform
                distanceFactor={10.5}
              >
                <div
                  className="wrapper"
                  onPointerDown={(e) => e.stopPropagation()}
                  style={{
                    width: '1732px',
                    height: '1000px',
                    transform: 'scale(0.4)',
                    transformOrigin: 'top left',
                  }}
                >
                  {children}
                </div>
              </Html>
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plano001_Backboard_0.geometry}
              material={materials.Backboard}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plano_Base_0.geometry}
            material={materials.Base}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt_Bolt_0.geometry}
            material={materials.Bolt}
            position={[138.582, 413.877, -176.412]}
            scale={5.554}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt001_Bolt_0.geometry}
            material={materials.Bolt}
            position={[138.582, 330.051, -176.412]}
            scale={5.554}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt002_Bolt_0.geometry}
            material={materials.Bolt}
            position={[-137.909, 413.877, -176.412]}
            scale={5.554}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt003_Bolt_0.geometry}
            material={materials.Bolt}
            position={[-137.909, 330.051, -176.412]}
            scale={5.554}
          />
        </group>
      </group>
    </group>
  );
};

export default Monitor;
