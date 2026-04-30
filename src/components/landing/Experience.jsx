"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export function Experience3D() {
  const textRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const textElement = textRef.current
    
    // GSAP Context for React 18 stability
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textElement,
        {
          x: "60%",
          rotateX: -20,
          rotateY: 10,
          z: -150,
          opacity: 0,
        },
        {
          x: "-60%",
          rotateX: 15,
          rotateY: -10,
          z: 150,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
            force3D: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden z-10 bg-white dark:bg-[#020617] transition-colors duration-700"
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none -z-10" />

      <h2
        ref={textRef}
        className="text-[20vw] md:text-[14vw] font-black uppercase tracking-tighter whitespace-nowrap
                   antialiased select-none pointer-events-none 
                   text-slate-900 dark:text-white
                   will-change-transform transform-gpu
                   [text-shadow:0_1px_0_#cbd5e1,0_2px_0_#cbd5e1,0_3px_0_#cbd5e1,0_4px_0_#cbd5e1]
                   dark:[text-shadow:0_1px_0_#1e293b,0_2px_0_#1e293b,0_3px_0_#1e293b,0_4px_0_#1e293b]"
        style={{
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))"
        }}
      >
        Experience
      </h2>
    </div>
  )
}