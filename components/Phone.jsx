import { Html, useGLTF } from '@react-three/drei';

export function Phone({ children, ...props }) {
  const { nodes, materials } = useGLTF('/models/phone1.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
      <group rotation={[-Math.PI, 0, 0]} scale={-12.869}>
        <group
          position={[0.983, 2.035, 0.506]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.258}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camera1_BodyFrame_0.geometry}
            material={materials.BodyFrame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camera1_Camera2_0.geometry}
            material={materials.Camera2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camera1_Camera3_0.geometry}
            material={materials.Camera3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camera1_Glass_0.geometry}
            material={materials.Glass}
          />
          <group position={[0, 2.785, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Camera2_0.geometry}
              material={materials.Camera2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Camera3_0.geometry}
              material={materials.Camera3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lens2_Lens_0.geometry}
              material={materials.Lens}
              position={[0, 0.004, -0.269]}
              scale={[0.497, 0.497, 0.213]}
            />
          </group>
          <group position={[0, -2.861, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Camera2_0.geometry}
              material={materials.Camera2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Camera3_0.geometry}
              material={materials.Camera3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Lens001_0.geometry}
              material={materials['Lens.001']}
            />
          </group>
          <group position={[2.608, -0.071, 0]} scale={0.678}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera4_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera4_Camera2_0.geometry}
              material={materials.Camera2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera4_Camera3_0.geometry}
              material={materials.Camera3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera4_Glass_0.geometry}
              material={materials.Glass}
            />
            <group
              position={[0.004, 0.007, -0.275]}
              scale={[0.421, 0.421, 0.228]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lens4_Camera2_0.geometry}
                material={materials.Camera2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lens4_Lens_0.geometry}
                material={materials.Lens}
              />
            </group>
          </group>
          <group position={[2.608, 1.416, 0]} scale={0.353}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Flashh_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Flashh_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Flashh_Glass_0.geometry}
              material={materials.Glass}
            />
          </group>
          <group
            position={[3.985, 4.506, -1.764]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={-0.734}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_Camera3_0.geometry}
              material={materials.Camera3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LensFC_Lens_0.geometry}
              material={materials.Lens}
              position={[0, 0, 0.116]}
              scale={[-0.165, -0.165, -0.09]}
            />
          </group>
          <group position={[0.002, 0, -0.269]} scale={[0.317, 0.317, 0.225]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lens1_Camera2_0.geometry}
              material={materials.Camera2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lens1_Lens_0.geometry}
              material={materials.Lens}
            />
          </group>
          <group position={[2.608, 2.844, 0]} scale={0.678}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sensor_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sensor_Camera2_0.geometry}
              material={materials.Camera2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sensor_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sensor_Red_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.S21ULTRA_Antennas_0.geometry}
          material={materials.Antennas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.S21ULTRA_BodyFrame_0.geometry}
          material={materials.BodyFrame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.S21ULTRA_Chrome_0.geometry}
          material={materials.Chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.S21ULTRA_Speaker_0.geometry}
          material={materials.Speaker}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Back_Back_0.geometry}
          material={materials.Back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CamModule_CameraModule_0.geometry}
          material={materials.CameraModule}
          position={[-1.006, -0.44, 0.043]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CamModuleFrame_BodyFrame_0.geometry}
          material={materials.BodyFrame}
          position={[-1.006, -0.44, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_BodyFrame_0.geometry}
          material={materials.BodyFrame}
          position={[-0.111, -3.08, 0.442]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={-0.489}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PowerButton_BodyFrame_0.geometry}
          material={materials.BodyFrame}
          position={[1.738, 0.43, 0.195]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={[-0.041, -0.032, -0.032]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_Screen_0.geometry}
          material={materials.Screen}
        />
        <Html
          className="contentPhone"
          position={[-0, -1.35, -0.08]}
          rotation={[0, 0, 0]}
          transform
          distanceFactor={3.2}
        >
          <div
            className="wrapperPhone"
            onPointerDown={(e) => e.stopPropagation()}
            style={{
              height: '844px',
              width: '405px',
              transformOrigin: 'top left',
            }}
          >
            {children}
          </div>
        </Html>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ScreenBezel_ScreenBezel_0.geometry}
          material={materials.ScreenBezel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VolumeButton__BodyFrame_0.geometry}
          material={materials.BodyFrame}
          position={[1.738, 1.325, 0.195]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={[-0.041, -0.032, -0.032]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/phone1.glb');
