"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const stats = [
  { label: "Systems Deployed", value: "120+" },
  { label: "Industries Served", value: "14" },
  { label: "Innovation Score", value: "A+" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(185,215,247,0.15),_transparent_55%)]" />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#B9D7F7]/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-[#4A274F]/40 blur-3xl" aria-hidden="true" />
      <div className="relative border-y border-white/10 bg-[linear-gradient(135deg,#2a1034_0%,#15081c_55%,#0c0212_100%)]">
        <div className="container mx-auto px-4 py-28">
          <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_420px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B9D7F7]/40 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#B9D7F7]">
                FUTURE-READY SYSTEMS
              </span>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Engineering the next era of intelligent electronics and immersive digital worlds.
              </h1>
              <p className="max-w-xl text-lg text-[#DCD4F4]/80">
                Ditronics combines precision hardware engineering with visionary software and content design. We craft
                resilient infrastructures, responsive applications, and cinematic storytelling that help ambitious teams
                outperform the future.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-[#B9D7F7] px-8 py-6 text-sm font-semibold uppercase tracking-wide text-[#1d1232] shadow-[0_20px_50px_rgba(185,215,247,0.35)] transition hover:bg-white"
                >
                  Schedule a strategy call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#DCD4F4]/40 bg-transparent px-8 py-6 text-sm font-semibold uppercase tracking-wide text-[#DCD4F4] hover:border-[#B9D7F7] hover:bg-[#B9D7F7]/10"
                >
                  Explore capabilities
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 text-sm text-[#DCD4F4]/90">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="font-display text-3xl font-semibold text-white">{stat.value}</div>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#B9D7F7]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative"
            >
              <div className="glass-panel relative overflow-hidden rounded-[32px] p-6">
                <div className="absolute inset-x-6 top-6 h-32 rounded-full bg-gradient-to-r from-[#4A274F]/60 via-transparent to-[#B9D7F7]/60 blur-2xl" />
                <div className="grid gap-4">
                  <div className="relative h-52 overflow-hidden rounded-3xl border border-white/10">
                    <Image
                      src="/images/hero/services-1.jpg"
                      alt="Precision lab work"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4A274F]/40 via-transparent to-[#0b0115]/80" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#B9D7F7]">
                      Integrated Labs
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-3xl border border-white/10">
                      <Image
                        src="/images/hero/services-2.jpg"
                        alt="Electronics assembly"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-[#4A274F]/60" />
                      <span className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-[0.25em] text-[#DCD4F4]">
                        Embedded Systems
                      </span>
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-3xl border border-white/10">
                      <Image
                        src="/images/hero/mindmap-1.jpg"
                        alt="Experience mapping"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#B9D7F7]/10 via-transparent to-[#12021d]/80" />
                      <span className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-[0.25em] text-[#B9D7F7]">
                        Experience Design
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-3xl border border-[#B9D7F7]/30 bg-[#4A274F]/30 p-4 text-sm text-[#DCD4F4]">
                  "Ditronics engineered our nationwide IoT network with surgical precision. Their team choreographs hardware,
                  software, and content as one living system."
                </div>
              </div>
              <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full border border-[#B9D7F7]/40" aria-hidden="true" />
              <div className="absolute -right-16 bottom-8 h-24 w-24 rounded-full border border-[#B9D7F7]/20" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
