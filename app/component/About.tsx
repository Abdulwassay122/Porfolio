"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [centered, setCentered] = useState(false);

  useEffect(() => {
    const handle = () => {
      const section = document.getElementById("about");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const centerLine = vh / 2;

      const pastTop = rect.top <= 30;
      const spansCenter = rect.top <= centerLine && rect.bottom >= centerLine;

      setCentered(pastTop && spansCenter);
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const blobs = useMemo(
    () =>
      [
        { size: 220, color: "rgba(119,239,252,0.35)" },
        { size: 160, color: "rgba(119,239,252,0.25)" },
        { size: 280, color: "rgba(119,239,252,0.2)" },
      ].map((blob) => ({
        ...blob,
        top: Math.random() * 70 + "%",
        left: Math.random() * 70 + "%",
        xMove: Math.random() * 600 - 300,
        yMove: Math.random() * 600 - 300,
        speed: Math.random() * 8 + 6,
      })),
    []
  );

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row w-full bg-[#0e1010] text-white pt-16 pb-24 lg:pl-36 sm:pl-10 pl-6 relative"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              background: blob.color,
              filter: "blur(70px)",
              top: blob.top,
              left: blob.left,
            }}
            animate={{
              x: [0, blob.xMove, 0],
              y: [0, blob.yMove, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: blob.speed,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Left: Sticky Heading */}
      <div className="w-full lg:w-[35%] pr-6 mb-10 lg:mb-0">
        <h1
          className={`sticky font-sen font-semibold tracking-tight transition-all duration-300
            ${
              centered
                ? "top-1/2 -translate-y-1/2 text-5xl sm:text-6xl lg:text-8xl"
                : "top-[20px] text-4xl sm:text-5xl lg:text-7xl"
            }`}
        >
          <div className="flex flex-col items-start lg:items-end w-fit relative">
            <span>About</span>
            <span className="absolute top-8 sm:top-10 outlined-text">Me</span>
          </div>
        </h1>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-[65%] px-4 sm:px-6 lg:px-8">
        {/* Intro Text */}
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 hover:border-[#77effc]/40 transition-all duration-300 mb-10">
          <div className="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
            <p>
              Hi, I’m{" "}
              <span className="font-semibold text-white">Abdul Wassay</span> — a
              developer who loves transforming ideas into digital experiences.
            </p>
            <p>
              What excites me most about{" "}
              <span className="text-[#77effc] font-medium">technology</span> is
              its power to solve real-world problems and create meaningful
              connections.
            </p>
            <p>
              Outside of coding, I’m always curious — experimenting with tools,
              reading about emerging technologies, or brainstorming fresh ideas.
            </p>
            <p>
              Looking ahead, I’m eager to keep growing as a developer while
              contributing to projects that challenge me and make a difference.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-6" ref={ref}>
          {/* Vertical Line */}
          <motion.span
            initial={{ height: 0, opacity: 0.3 }}
            animate={inView ? { height: "100%", opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-3 sm:left-4 top-0 bottom-0 w-[2px] sm:w-[3px] bg-gradient-to-b from-[#77effc] to-transparent rounded-full"
          />

          <div className="space-y-10 sm:space-y-12">
            {/* Step 1: Experience */}
            <div className="relative pl-10 sm:pl-14">
              <span className="absolute left-[6px] sm:left-[9px] top-6 flex items-center justify-center">
                <span className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#77effc] shadow-[0_0_8px_3px_rgba(119,239,252,0.4)]" />
              </span>
              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-6 hover:border-[#77effc]/40 transition-all duration-300">
                <h2 className="text-lg sm:text-xl font-semibold text-[#77effc] mb-3">
                  Experience
                </h2>
                <h3 className="text-base sm:text-lg font-semibold text-[#77effc]">
                  Full Stack Developer
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mt-1">
                  Betalogics
                </p>
              </div>
            </div>

            {/* Step 2: Education */}
            <div className="relative pl-10 sm:pl-14">
              <span className="absolute left-[6px] sm:left-[9px] top-6 flex items-center justify-center">
                <span className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#77effc] shadow-[0_0_8px_3px_rgba(119,239,252,0.4)]" />
              </span>
              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-6 hover:border-[#77effc]/40 transition-all duration-300">
                <h2 className="text-lg sm:text-xl font-semibold text-[#77effc]">
                  Education
                </h2>
                <div className="mt-3 sm:mt-4 space-y-4 sm:space-y-6">
                  <div>
                    <p className="text-sm sm:text-lg font-medium text-gray-200">
                      BS – Computer Science
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#77effc] bg-[#77effc]/10 w-fit px-2 sm:px-3 py-1 rounded-full">
                      2025 – 2028 (Ongoing)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-lg font-medium text-gray-200">
                      Diploma – Artificial Intelligence
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#77effc] bg-[#77effc]/10 w-fit px-2 sm:px-3 py-1 rounded-full">
                      2024 – 2025 (Ongoing)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-lg font-medium text-gray-200">
                      FSC – Pre Engineering
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#77effc] bg-[#77effc]/10 w-fit px-2 sm:px-3 py-1 rounded-full">
                      2022 – 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
