import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useMemo, useRef } from "react";
import type * as THREE from "three";

const WA_LINK =
  "https://wa.me/919209604008?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20Pixel%20Venus%20Media";

function EnergyCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const s = 1 + Math.sin(t * 2) * 0.12;
    meshRef.current.scale.setScalar(s);
    meshRef.current.rotation.y = t * 0.5;
    meshRef.current.rotation.x = t * 0.3;
  });
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial
        color="#003050"
        emissive="#00C2FF"
        emissiveIntensity={2}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

function FloatingDevice({
  position,
  shape,
}: {
  position: [number, number, number];
  shape: "box" | "torus" | "icosahedron";
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const offset = useRef(Math.random() * Math.PI * 2);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() + offset.current;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.4;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.3;
  });
  const mat = (
    <meshStandardMaterial
      color="#1a3a4a"
      emissive="#003050"
      emissiveIntensity={0.6}
      metalness={0.9}
      roughness={0.1}
    />
  );
  return (
    <mesh ref={meshRef} position={position}>
      {shape === "box" && <boxGeometry args={[0.9, 1.2, 0.3]} />}
      {shape === "torus" && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
      {shape === "icosahedron" && <icosahedronGeometry args={[0.7]} />}
      {mat}
    </mesh>
  );
}

function Particles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 5;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.getElapsedTime() * 0.04;
    points.current.rotation.x = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#00C2FF"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function HoloCard({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const offset = useRef(Math.random() * Math.PI * 2);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() + offset.current;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.6) * 0.4;
    meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
  });
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.55, 1.0, 0.04]} />
      <meshStandardMaterial
        color="#001a2e"
        emissive="#002244"
        emissiveIntensity={1}
        opacity={0.85}
        transparent
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
}

function NeonGrid() {
  return (
    <gridHelper args={[30, 30, "#00C2FF", "#001A2E"]} position={[0, -2.5, 0]} />
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const particleCount = isMobile ? 50 : 150;
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 5, 5]} color="#00C2FF" intensity={3} />
      <pointLight position={[-5, -3, -5]} color="#0080ff" intensity={1.5} />
      <pointLight position={[5, 0, -5]} color="#6EF0FF" intensity={0.8} />
      <Stars
        radius={60}
        depth={30}
        count={isMobile ? 800 : 2000}
        factor={4}
        saturation={0.5}
        fade
      />
      <NeonGrid />
      <EnergyCore />
      <FloatingDevice position={[-3, 1, -2]} shape="box" />
      <FloatingDevice position={[3, 0, -1]} shape="torus" />
      <FloatingDevice position={[2, 2, -3]} shape="icosahedron" />
      <HoloCard position={[-2, 0, -1]} />
      <HoloCard position={[1.5, -0.5, -2]} />
      <HoloCard position={[-1.5, 1.5, -3]} />
      <HoloCard position={[2.8, 1, -1.5]} />
      <Particles count={particleCount} />
    </>
  );
}

export default function HeroSection() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ height: "100vh", minHeight: 600 }}
    >
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 1.5, 9], fov: 60 }}
          style={{ background: "#0B0B0B" }}
          gl={{ antialias: !isMobile, alpha: false }}
          dpr={isMobile ? 1 : [1, 2]}
        >
          <Suspense fallback={null}>
            <Scene isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(11,11,11,0.7) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0B0B)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="section-label mb-4">
              DIGITAL MEDIA &amp; CONTENT CREATION
            </p>
            <h1
              className="font-heading font-black text-white leading-none mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textShadow:
                  "0 0 60px rgba(0,194,255,0.3), 0 0 120px rgba(0,194,255,0.1)",
                lineHeight: 1.1,
              }}
            >
              Grow Your Brand with{" "}
              <span
                style={{
                  color: "#00C2FF",
                  textShadow: "0 0 30px rgba(0,194,255,0.8)",
                }}
              >
                Pixel Venus Media
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[#B8C6CF] mb-10 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.7 }}
          >
            We create content that converts views into customers. Premium reels,
            shoots &amp; digital marketing for brands that dare to grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.primary_button"
              className="btn-cyan px-8 py-4 text-base font-bold rounded-full"
            >
              Contact Now →
            </a>
            <a
              href="#services"
              data-ocid="hero.secondary_button"
              className="px-8 py-4 text-base font-semibold rounded-full text-[#00C2FF] transition-all duration-200"
              style={{ border: "1px solid rgba(0,194,255,0.3)" }}
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-12"
          >
            {[
              { value: "200+", label: "Clients" },
              { value: "500+", label: "Reels Created" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-5 py-3 rounded-full"
                style={{
                  background: "rgba(20,30,36,0.7)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(0,194,255,0.2)",
                }}
              >
                <span
                  className="font-heading font-bold text-[#00C2FF]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </span>{" "}
                <span className="text-[#B8C6CF] text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#B8C6CF] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, #00C2FF, transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
