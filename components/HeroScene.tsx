"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const mouse = { x: 0, y: 0 };

function BracketShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.rotation.y = t * 0.12 + mouse.x * 0.3;
      groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.08 + mouse.y * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.4}>
        <mesh position={[-1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[1.1, 0.07, 16, 64, Math.PI * 0.72]} />
          <MeshDistortMaterial
            color="#7c6bb8"
            distort={0.25}
            speed={1.5}
            roughness={0.15}
            metalness={0.85}
            transparent
            opacity={0.75}
          />
        </mesh>
        <mesh position={[1.6, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <torusGeometry args={[1.1, 0.07, 16, 64, Math.PI * 0.72]} />
          <MeshDistortMaterial
            color="#7c6bb8"
            distort={0.25}
            speed={1.5}
            roughness={0.15}
            metalness={0.85}
            transparent
            opacity={0.75}
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.15, 2.2, 0.15]} />
          <meshStandardMaterial color="#9b8fd4" metalness={0.9} roughness={0.1} transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.15, 2.2, 0.15]} />
          <meshStandardMaterial color="#9b8fd4" metalness={0.9} roughness={0.1} transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
      ref.current.scale.set(scale, scale, 1);
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <ringGeometry args={[2.5, 2.52, 64]} />
      <meshBasicMaterial color="#7c6bb8" transparent opacity={0.15} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Particles() {
  const count = 120;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#9b8fd4" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(124,107,184,0.18),transparent_70%)]" />
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[8, 8, 8]} intensity={0.8} color="#7c6bb8" />
          <pointLight position={[-8, -4, -4]} intensity={0.4} color="#c4b5fd" />
          <spotLight position={[0, 12, 4]} intensity={0.6} angle={0.4} penumbra={1} color="#ffffff" />
          <GlowRing />
          <BracketShape />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
