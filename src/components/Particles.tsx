import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

const ParticlesComponent = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

const particlesLoaded = async (container?: Container): Promise<void> => {
  console.log(container);
};

  const options = useMemo(
    () => ({
      background: { color: { value: "#111827" } },
      fullScreen: { enable: true, zIndex: -1 },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#FFFFFF" },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: "bounce",
        },
        number: { value: 150, density: { enable: true } },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      } as const,
      detectRetina: true,
    }),
    []
  );

  return <Particles particlesLoaded={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
