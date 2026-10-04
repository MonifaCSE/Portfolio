"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Inner Scene Group handling pointer parallax & scroll animation
function StackGroup() {
  const groupRef = React.useRef<THREE.Group>(null);
  const pulseRef = React.useRef<THREE.Mesh>(null);

  // Target pointer angles for lerping
  const targetRotation = React.useRef({ x: 0, y: 0 });
  const scrollOffset = React.useRef(0);

  React.useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRotation.current.y = x * (Math.PI / 45); // ±4 degrees Y
      targetRotation.current.x = y * (Math.PI / 72); // ±2.5 degrees X
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      scrollOffset.current = Math.min(scrollY / vh, 1);
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth pointer parallax lerp
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation.current.y + scrollOffset.current * 0.2,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      0.05
    );

    // Ember Pulse loop hop animation
    if (pulseRef.current) {
      const time = state.clock.getElapsedTime() * 1.5;
      const cycle = Math.sin(time); // -1 to 1
      pulseRef.current.position.y = cycle * 1.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Slab 01: Interface (Top) */}
      <group position={[0, 1.1, 0]}>
        <mesh>
          <boxGeometry args={[3.8, 0.08, 2.4]} />
          <meshStandardMaterial color="#16191D" roughness={0.65} metalness={0.15} />
        </mesh>
        {/* Top Edge Ember Accent Line */}
        <mesh position={[0, 0.045, -1.2]}>
          <boxGeometry args={[3.8, 0.01, 0.02]} />
          <meshBasicMaterial color="#E8743B" />
        </mesh>
        {/* Inset UI Blocks */}
        <mesh position={[-0.8, 0.05, 0.3]}>
          <boxGeometry args={[0.8, 0.02, 0.4]} />
          <meshBasicMaterial color="#2A2F36" />
        </mesh>
        <mesh position={[0.4, 0.05, -0.2]}>
          <boxGeometry args={[1.2, 0.02, 0.3]} />
          <meshBasicMaterial color="#E8743B" transparent opacity={0.8} />
        </mesh>
      </group>

      {/* Slab 02: Logic (Middle) */}
      <group position={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[3.8, 0.08, 2.4]} />
          <meshStandardMaterial color="#16191D" roughness={0.65} metalness={0.15} />
        </mesh>
        {/* Logic Nodes Graph */}
        <mesh position={[-0.6, 0.06, -0.3]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#ECE8E1" />
        </mesh>
        <mesh position={[0, 0.06, 0.2]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#ECE8E1" />
        </mesh>
        <mesh position={[0.8, 0.06, -0.1]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial color="#E8743B" />
        </mesh>
      </group>

      {/* Slab 03: Data (Bottom) */}
      <group position={[0, -1.1, 0]}>
        <mesh>
          <boxGeometry args={[3.8, 0.08, 2.4]} />
          <meshStandardMaterial color="#16191D" roughness={0.65} metalness={0.15} />
        </mesh>
        {/* Database Cylinders Glyph */}
        <mesh position={[-0.5, 0.12, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 16]} />
          <meshBasicMaterial color="#2A2F36" />
        </mesh>
        <mesh position={[-0.5, 0.22, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 16]} />
          <meshBasicMaterial color="#E8743B" />
        </mesh>
      </group>

      {/* Ember Request Pulse Sphere */}
      <mesh ref={pulseRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#F08A57" />
      </mesh>
    </group>
  );
}

export default function ExplodedStackScene() {
  return (
    <Canvas
      camera={{ position: [6.2, 4.4, 7.0], fov: 32 }}
      dpr={[1, 1.75]}
      className="w-full h-full"
    >
      {/* Lights - Warm Key + Soft Fill */}
      <directionalLight position={[10, 15, 8]} intensity={2.2} color="#FFF1E6" />
      <hemisphereLight color="#2A2F36" groundColor="#0B0C0E" intensity={0.6} />

      {/* Main 3D Group */}
      <StackGroup />
    </Canvas>
  );
}
