import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function ElectricGrid() {
  const meshRef = useRef();
  const linesRef = useRef([]);
  const [hovered, setHovered] = useState(false);

  // Create grid points
  const points = useMemo(() => {
    const pts = [];
    const size = 12;
    const step = 1.2;
    for (let x = -size; x <= size; x += step) {
      for (let z = -size; z <= size; z += step) {
        pts.push(new THREE.Vector3(x, 0, z));
      }
    }
    return pts;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Animate point positions
    points.forEach((p, i) => {
      if (meshRef.current?.children[i]) {
        const baseY = 0;
        const wave = Math.sin(p.x * 0.5 + t * 0.8) * Math.cos(p.z * 0.5 + t * 0.6) * 0.3;
        const mouseInfluence = hovered
          ? Math.exp(-state.pointer.y * 2) * 0.5
          : 0;
        meshRef.current.children[i].position.y = baseY + wave + mouseInfluence;

        // Pulse opacity
        const pulse = 0.3 + Math.sin(t * 2 + i * 0.1) * 0.15;
        meshRef.current.children[i].material.opacity = pulse;
      }
    });
  });

  return (
    <group ref={meshRef}>
      {points.map((p, i) => (
        <Float key={i} speed={2} rotationIntensity={0} floatIntensity={0.5}>
          <mesh
            position={[p.x, 0, p.z]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial
              color={hovered ? '#22d3ee' : '#06b6d4'}
              transparent
              opacity={0.4}
              toneMapped={false}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const groupRef = useRef();

  const particles = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20,
      ],
      scale: Math.random() * 0.04 + 0.01,
      speed: Math.random() * 0.5 + 0.2,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    particles.forEach((p, i) => {
      if (groupRef.current?.children[i]) {
        const mesh = groupRef.current.children[i];
        mesh.position.y += Math.sin(t * p.speed + p.offset) * 0.002;
        mesh.position.x += Math.cos(t * p.speed * 0.5 + p.offset) * 0.001;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.scale, 6, 6]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#a855f7' : '#06b6d4'}
            transparent
            opacity={0.3}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function ConnectingLines() {
  const linesRef = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    linesRef.current.forEach((line, i) => {
      if (line) {
        line.material.opacity = 0.05 + Math.sin(t + i * 0.5) * 0.03;
      }
    });
  });

  // Create random connecting lines
  const lineData = useMemo(() => {
    const lines = [];
    for (let i = 0; i < 30; i++) {
      lines.push({
        start: [
          (Math.random() - 0.5) * 10,
          Math.random() * 2,
          (Math.random() - 0.5) * 10,
        ],
        end: [
          (Math.random() - 0.5) * 10,
          Math.random() * 2,
          (Math.random() - 0.5) * 10,
        ],
        color: Math.random() > 0.5 ? '#06b6d4' : '#a855f7',
      });
    }
    return lines;
  }, []);

  return (
    <group>
      {lineData.map((line, i) => (
        <line key={i} ref={(el) => (linesRef.current[i] = el)}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              itemSize={3}
              array={new Float32Array([...line.start, ...line.end])}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={line.color}
            transparent
            opacity={0.08}
            toneMapped={false}
          />
        </line>
      ))}
    </group>
  );
}

function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'low-power',
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={50} />
        <color attach="background" args={['#030712']} />
        <ElectricGrid />
        <FloatingParticles />
        <ConnectingLines />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;
