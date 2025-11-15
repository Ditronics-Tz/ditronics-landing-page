"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const principles = [
  {
    title: "Mission",
    description:
      "To engineer dependable technology ecosystems that enable African enterprises to operate with global precision and cultural resonance.",
  },
  {
    title: "Philosophy",
    description:
      "Every circuit, line of code, and story is crafted to be measurable, human-centred, and built for longevity.",
  },
  {
    title: "Differentiator",
    description:
      "A multidisciplinary studio where electronic engineers, software architects, and filmmakers collaborate daily.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,212,244,0.08),_transparent_70%)]" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-[#B9D7F7]">About Ditronics</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              We architect technology and media that move nations, institutions, and communities forward.
            </h2>
            <p className="text-lg text-[#DCD4F4]/80">
              Founded by engineers obsessed with signal integrity, Ditronics has grown into a company trusted by banks,
              broadcasters, universities, and public agencies. We pair rigorous engineering methods with art direction to
              deliver systems that feel inevitable.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">{principle.title}</h3>
                  <p className="mt-3 text-sm text-[#DCD4F4]/80">{principle.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-[#B9D7F7]/30 bg-[#12061a]/70 p-6 text-sm text-[#DCD4F4]/90">
              <p>
                “We approach every engagement like a flagship launch. Discovery labs, technical due diligence, and cinematic
                prototyping ensure the final delivery is elegant, measurable, and resilient.”
              </p>
              <p className="mt-4 font-display text-sm uppercase tracking-[0.35em] text-[#B9D7F7]">Dr. Haji Fimbombaya · Founder & CEO</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="glass-panel relative overflow-hidden rounded-[32px] p-8">
              <div className="absolute inset-x-8 top-12 h-56 rounded-full bg-gradient-to-br from-[#B9D7F7]/25 via-transparent to-[#4A274F]/40 blur-2xl" />
              <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-white/10">
                <Image
                  src="/images/hero/mindmap-2.jpg"
                  alt="Ditronics strategy session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0316] via-transparent to-[#13091c]/80" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#12061a]/80 p-5 text-sm text-[#DCD4F4]">
                  <p className="font-semibold text-white">Integrated Delivery Model</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#DCD4F4]/80">
                    Research ➝ Design ➝ Engineering ➝ Content ➝ Managed Services. Our cross-functional squads stay with you
                    from discovery to scale.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[#B9D7F7]/80">
                <span>Since 2014</span>
                <span>Dar es Salaam · Remote-first</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
