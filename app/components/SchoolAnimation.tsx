'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function Ground() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      colorA: { value: new THREE.Color('#2ecc71') },
      colorB: { value: new THREE.Color('#27ae60') }
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          varying vec2 vUv;
          
          void main() {
            float noise = sin(vUv.y * 10.0 + time * 0.5) * 0.1;
            vec3 color = mix(colorA, colorB, vUv.y + noise);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

function School() {
  const buildingRef = useRef<THREE.Group>(null);
  const roofRef = useRef<THREE.Mesh>(null);
  const windowRefs = useRef<THREE.Mesh[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  useFrame((state) => {
    if (buildingRef.current && roofRef.current) {
      // Gentle floating animation with smoother motion
      const t = state.clock.getElapsedTime();
      const floatY = Math.sin(t * 0.5) * 0.1;
      buildingRef.current.position.y = floatY;
      roofRef.current.position.y = 1.5 + floatY;
      
      // Subtle rotation
      buildingRef.current.rotation.y = Math.sin(t * 0.2) * 0.05;

      // Window glow animation with hover effect
      windowRefs.current.forEach((windowMesh, i) => {
        if (windowMesh.material instanceof THREE.MeshPhongMaterial) {
          const baseIntensity = Math.abs(Math.sin(t + i * 0.5)) * 0.5;
          const hoverBoost = hovered === i ? 1 : 0;
          windowMesh.material.emissiveIntensity = baseIntensity + hoverBoost;
        }
      });
    }
  });

  const windows: [number, number, number][] = [
    [-0.5, 0.2, 0.51],
    [0.5, 0.2, 0.51],
    [-0.5, -0.2, 0.51],
    [0.5, -0.2, 0.51]
  ];

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={buildingRef} position={[0, 0, 0]}>
        {/* Main Building */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 1.5, 1]} />
          <meshPhongMaterial 
            color="#4a90e2"
            shininess={50}
            specular={new THREE.Color('#ffffff')}
          />
        </mesh>

        {/* Roof */}
        <mesh ref={roofRef} position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[1.5, 1, 4]} />
          <meshPhongMaterial 
            color="#e74c3c"
            shininess={60}
            specular={new THREE.Color('#ffffff')}
          />
        </mesh>

        {/* Windows */}
        {windows.map((pos, i) => (
          <mesh
            key={i}
            ref={(el) => {
              if (el) windowRefs.current[i] = el;
            }}
            position={pos}
            castShadow
            onPointerOver={() => setHovered(i)}
            onPointerOut={() => setHovered(null)}
          >
            <planeGeometry args={[0.3, 0.3]} />
            <meshPhongMaterial 
              color="#f1c40f"
              emissive="#f1c40f"
              emissiveIntensity={0.5}
              shininess={100}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const radius = 5;
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    return positions;
  });

  useFrame((state) => {
    if (particlesRef.current) {
      const t = state.clock.getElapsedTime();
      particlesRef.current.rotation.y = t * 0.05;
      particlesRef.current.rotation.x = Math.sin(t * 0.025) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function SchoolAnimation() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [5, 2, 5], fov: 75 }}
        className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800"
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={['#f0f0f0', 5, 30]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[5, 5, 5]}
            intensity={0.8}
            shadow-mapSize={[1024, 1024]}
          >
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10]} />
          </directionalLight>
          <School />
          <Ground />
          <Particles />
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            maxDistance={15}
            minDistance={3}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 