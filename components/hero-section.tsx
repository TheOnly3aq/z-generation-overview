'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Title animations
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Scroll indicator fades out quickly
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Subtle retro grid */}
      <div className="absolute inset-0 retro-grid" />

      {/* Subtle scanlines for retro feel */}
      <div className="absolute inset-0 scanlines opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
        >
          {/* Logo badge */}
          <motion.div
            className="mx-auto mb-6 w-24 h-24 flex items-center justify-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/icon.svg"
              alt="BMW Z Series"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.p
            className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            BMW Roadster Heritage
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Z Series
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/30 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            1989 - 2026
          </motion.p>
        </motion.div>

        {/* Timeline preview - minimal */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ opacity: titleOpacity }}
        >
          {[
            { name: 'Z1', year: "'89" },
            { name: 'Z3', year: "'95" },
            { name: 'Z8', year: "'99" },
            { name: 'Z4', year: "'02" },
          ].map((item, i) => (
            <div key={item.name} className="flex items-center gap-6 md:gap-10">
              <div className="text-center">
                <span className="text-xl md:text-2xl font-bold text-white">{item.name}</span>
                <p className="text-[10px] text-white/30 font-mono mt-1">{item.year}</p>
              </div>
              {i < 3 && (
                <div className="w-6 md:w-10 h-px bg-white/10" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-white/20 relative overflow-hidden"
        >
          <motion.div
            className="w-full h-2 bg-white/60"
            animate={{ y: ['-100%', '400%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
