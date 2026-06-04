'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { ZModel } from '@/lib/z-models-data'

interface ScrollSectionProps {
  model: ZModel
  index: number
  total: number
}

export function ScrollSection({ model, index, total }: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Car image - the hero, smooth parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%'])
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  // Left side info (name, years)
  const leftOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const leftX = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-60, 0, 0, -60])

  // Right side info (power, chassis)
  const rightOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const rightX = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [60, 0, 0, 60])

  // Bottom facts
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const bottomY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, 40])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] flex items-center justify-center"
    >
      {/* Subtle grid overlay - same for all sections */}
      <div className="absolute inset-0 retro-grid pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Main layout - car centered with info around it */}
        <div className="relative min-h-[80vh] flex items-center justify-center">
          
          {/* LEFT SIDE - Model name and years */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 max-w-[200px] md:max-w-[280px]"
            style={{ opacity: leftOpacity, x: leftX }}
          >
            {model.isFacelift && (
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest border border-white/30 text-white/70 mb-3">
                Facelift
              </span>
            )}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
              {model.name}
            </h2>
            {model.subtitle && (
              <p className="text-sm md:text-base text-white/50 mt-1 font-mono">
                {model.subtitle}
              </p>
            )}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-3xl md:text-4xl font-light text-white/90 tabular-nums">
                {model.years.split('-')[0]}
              </p>
              <p className="text-xs text-white/40 font-mono uppercase tracking-wider mt-1">
                {model.years.includes('-') ? `to ${model.years.split('-')[1]}` : 'Production Year'}
              </p>
            </div>
          </motion.div>

          {/* CENTER - Car Image (THE HERO) */}
          <motion.div
            className="relative w-full max-w-4xl mx-auto z-10"
            style={{
              y: imageY,
              scale: imageScale,
              opacity: imageOpacity,
            }}
          >
            <div className="relative aspect-[16/9] w-full">
              <img
                src={model.image}
                alt={`BMW ${model.name} ${model.subtitle || ''}`}
                className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Power and chassis info */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 text-right max-w-[200px] md:max-w-[280px]"
            style={{ opacity: rightOpacity, x: rightX }}
          >
            <div className="mb-6">
              <p className="text-xs text-white/40 font-mono uppercase tracking-wider mb-1">
                Power Output
              </p>
              <p className="text-3xl md:text-4xl font-bold text-white tabular-nums">
                {model.powerRange}
              </p>
            </div>
            <div className="mb-6">
              <p className="text-xs text-white/40 font-mono uppercase tracking-wider mb-1">
                Chassis
              </p>
              <p className="text-sm md:text-base text-white/70 font-mono">
                {model.chassis}
              </p>
            </div>
            <div>
              <p className="text-xs text-white/40 font-mono uppercase tracking-wider mb-1">
                Body Style
              </p>
              <p className="text-sm md:text-base text-white/70">
                {model.bodyStyle}
              </p>
            </div>
          </motion.div>

          {/* BOTTOM - Facts and special editions */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-20"
            style={{ opacity: bottomOpacity, y: bottomY }}
          >
            <div className="max-w-2xl mx-auto">
              {/* Facts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                {(model.isFacelift && model.faceliftChanges ? model.faceliftChanges : model.facts).slice(0, 4).map((fact, i) => (
                  <p key={i} className="text-xs md:text-sm text-white/50 flex items-start gap-2">
                    <span className="text-white/30 mt-0.5">{'>'}</span>
                    {fact}
                  </p>
                ))}
              </div>
              
              {/* Special Editions */}
              {model.specialEditions && model.specialEditions.length > 0 && (
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/5">
                  <span className="text-[10px] text-white/30 font-mono uppercase tracking-wider">
                    Special Editions:
                  </span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {model.specialEditions.map((edition, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono text-white/60 border border-white/10"
                      >
                        {edition}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Timeline indicator */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center gap-2"
          style={{ opacity: bottomOpacity }}
        >
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === index ? 'bg-white w-6' : 'bg-white/20'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
