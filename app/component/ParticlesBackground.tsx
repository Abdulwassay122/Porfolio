"use client"
import React from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useState } from "react"
import { loadSlim } from "@tsparticles/slim" // smaller bundle (you can use loadFull if needed)

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can use loadFull(engine) for all features
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000", // black background
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // makes particles bind to cursor
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: { enable: true },
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.7,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#77effc", // particle color
            },
            links: {
              color: "#77effc",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              outModes: {
                default: "out",
              },
            },
            number: {
              density: {
                enable: true,
                width: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}
