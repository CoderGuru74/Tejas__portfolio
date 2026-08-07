import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingArrow() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      // Gentle floating rotation and movement pointing down-left toward image
      groupRef.current.rotation.z = Math.sin(t * 1.5) * 0.15;
      groupRef.current.rotation.y = Math.cos(t * 1.2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} rotation={[0, 0, -Math.PI / 3]} scale={1.2}>
        {/* Arrow Shaft */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1.2, 16]} />
          <meshStandardMaterial color="#B5F83B" emissive="#B5F83B" emissiveIntensity={0.6} />
        </mesh>

        {/* Arrow Head */}
        <mesh position={[0, -0.1, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.18, 0.4, 16]} />
          <meshStandardMaterial color="#B5F83B" emissive="#B5F83B" emissiveIntensity={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[120px] w-[180px] relative pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3] }} style={{ height: '100%', width: '100%' }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <RotatingArrow />
      </Canvas>
    </div>
  );
}