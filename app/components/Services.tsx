"use client"

import { motion } from "framer-motion"
import { Cpu, CircuitBoard, Layers, Monitor, Sparkle } from "lucide-react"

const solutions = [
  {
    icon: Cpu,
    title: "Intelligent Electronics",
    description:
      "Custom devices, embedded firmware, and industrial controllers meticulously engineered for resilience and speed.",
    bullets: [
      "IoT architecture & telemetry platforms",
      "PCB design, prototyping, and testing",
      "Edge AI integration and low-power optimisation",
    ],
  },
  {
    icon: Layers,
    title: "Software Platforms",
    description:
      "Cloud-native applications and integrations that fuse analytics, automation, and delightful user experiences.",
    bullets: [
      "Mission-critical web & mobile apps",
      "Secure API ecosystems and data orchestration",
      "Realtime dashboards & decision systems",
    ],
  },
  {
    icon: Monitor,
    title: "Immersive Content Studios",
    description:
      "Cinematic storytelling, broadcast production, and visual systems that amplify your brand with precision.",
    bullets: [
      "Studio-grade film & livestream production",
      "Motion graphics and experiential design",
      "Brand narratives for launches & campaigns",
    ],
  },
  {
    icon: CircuitBoard,
    title: "Infrastructure Services",
    description:
      "End-to-end implementation, lifecycle management, and support for large-scale technology estates.",
    bullets: [
      "Network deployment & secure monitoring",
      "Lifecycle support and predictive maintenance",
      "Systems integration & performance tuning",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,39,79,0.2),_transparent_65%)]" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#B9D7F7]">Solutions</span>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Precision systems across the entire digital stack.</h2>
          <p className="mt-6 text-lg text-[#DCD4F4]/80">
            From silicon to storytelling, Ditronics orchestrates multidisciplinary teams that move ideas from lab-grade
            prototypes to enterprise deployments with extraordinary craftsmanship.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(74,39,79,0.45),rgba(21,8,28,0.92))] p-8 shadow-[0_30px_60px_rgba(6,1,18,0.45)]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(185,215,247,0.18),_transparent)]" />
              </div>
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B9D7F7]/30 bg-white/10 text-[#B9D7F7]">
                    <solution.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#B9D7F7]/80">Ditronics Division</p>
                  </div>
                </div>
                <p className="text-base text-[#DCD4F4]/80">{solution.description}</p>
                <ul className="space-y-3 text-sm text-[#DCD4F4]">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Sparkle className="mt-1 h-4 w-4 text-[#B9D7F7]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid gap-8 rounded-3xl border border-white/10 bg-[#12061a]/70 p-10 md:grid-cols-[1.3fr_1fr]"
        >
          <div>
            <h3 className="text-3xl font-semibold text-white">Co-innovation programs</h3>
            <p className="mt-4 text-[#DCD4F4]/80">
              We embed with your teams to co-design product roadmaps, set measurable transformation goals, and deliver
              release cadences that accelerate value. The result is a resilient ecosystem engineered for continuous
              evolution.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-[#DCD4F4]">
            {[
              "Design Sprints & Strategic Foresight",
              "Technology master planning & PMO",
              "Lifecycle governance and managed services",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
