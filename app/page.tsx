'use client'

import { HeroSection } from '@/components/hero-section'
import { ScrollSection } from '@/components/scroll-section'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { zModels } from '@/lib/z-models-data'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative bg-[#0a0a0a]">
        {/* Fixed Header - minimal */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                <span className="font-bold text-xs text-white">Z</span>
              </div>
              <span className="text-xs font-mono text-white/40 hidden sm:block">BMW Z SERIES</span>
            </div>
            <span className="text-[10px] text-white/30 font-mono uppercase tracking-wider">
              1989 - 2026
            </span>
          </div>
        </motion.header>

        {/* Hero Section */}
        <HeroSection />

        {/* Car Sections with Scroll-Linked Animations */}
        {zModels.map((model, index) => (
          <ScrollSection
            key={model.id}
            model={model}
            index={index}
            total={zModels.length}
          />
        ))}

        {/* Footer */}
        <footer className="relative py-24 text-center bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-white/20 font-mono uppercase tracking-[0.3em] mb-4">
                1989 - 2026
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
                The End of an Era
              </h2>
              <p className="text-sm text-white/40 max-w-lg mx-auto">
                From the revolutionary Z1 to the Final Edition Z4, the BMW Z Series 
                defined the modern roadster for over three decades.
              </p>

              {/* Quick Chassis Reference */}
              <div className="mt-16 p-6 border border-white/10 max-w-3xl mx-auto">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono mb-6">
                  Chassis Guide
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { code: 'Z1', desc: 'Original Z' },
                    { code: 'E36/7', desc: 'Z3 Roadster' },
                    { code: 'E36/8', desc: 'Z3 Coupe' },
                    { code: 'E52', desc: 'Z8' },
                    { code: 'E85', desc: 'Z4 Gen 1 Roadster' },
                    { code: 'E86', desc: 'Z4 Gen 1 Coupe' },
                    { code: 'E89', desc: 'Z4 Gen 2' },
                    { code: 'G29', desc: 'Z4 Gen 3' },
                  ].map((item) => (
                    <div key={item.code} className="text-left">
                      <p className="font-mono font-bold text-sm text-white">{item.code}</p>
                      <p className="text-[10px] text-white/30">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[10px] text-white/10 mt-12 font-mono">
                BMW Z Series Heritage
              </p>
            </motion.div>
          </div>
        </footer>
      </main>
    </SmoothScrollProvider>
  )
}
