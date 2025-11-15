"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "National University of Science", tag: "STEM education networks" },
  { name: "Coastal Finance Group", tag: "Regulated digital banking" },
  { name: "Tanzania Broadcast Alliance", tag: "Live production" },
  { name: "Kijiji Health Systems", tag: "Smart hospitals" },
  { name: "Azania Ports Authority", tag: "Critical infrastructure" },
  { name: "Aurora Hospitality", tag: "Connected experiences" },
]

export default function Clients() {
  return (
    <section id="clients" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(185,215,247,0.12),_transparent_60%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#B9D7F7]">Trusted Partnerships</span>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Ditronics systems power leaders across Africa.</h2>
          <p className="mt-6 text-lg text-[#DCD4F4]/80">
            Our collaborative approach, rigorous compliance, and production-ready delivery earn the confidence of
            organisations operating in high-stakes environments.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.1, duration: 0.4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#12061a]/70 p-6 shadow-[0_18px_38px_rgba(6,1,18,0.35)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#4A274F]/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.35em] text-[#B9D7F7]/70">Partner</span>
                  <span className="h-2 w-2 rounded-full bg-[#B9D7F7]/60" />
                </div>
                <p className="font-display text-xl font-semibold text-white">{client.name}</p>
                <p className="text-sm text-[#DCD4F4]/70">{client.tag}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#B9D7F7]/40 to-transparent" />
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#B9D7F7]/80">Strategic alliance</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
