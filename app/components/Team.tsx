"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin } from "lucide-react"

type Member = {
  name: string
  role: string
  focus: string
  image?: string
  initials?: string
}

const teamMembers: Member[] = [
  {
    name: "Dr. Haji Fimbombaya",
    role: "Founder & Chief Executive Officer",
    focus: "Systems architecture, strategic partnerships, and mission-critical programme leadership.",
    image: "/images/team/dr-haji-fimbombaya.jpg",
  },
  {
    name: "Ruth Mbeki",
    role: "Director of Digital Studios",
    focus: "Leads immersive storytelling, broadcast innovation, and experiential brand launches.",
    initials: "RM",
  },
  {
    name: "Isaac Tembo",
    role: "Head of Embedded Engineering",
    focus: "Designs resilient electronics, firmware, and edge AI for industrial deployments.",
    initials: "IT",
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,39,79,0.2),_transparent_70%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#B9D7F7]">Leadership</span>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Meet the architects shaping Ditronics’ future.</h2>
          <p className="mt-6 text-lg text-[#DCD4F4]/80">
            A multidisciplinary team orchestrating complex technology programmes, hands-on in delivery, and relentless
            about quality.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#12061a]/80 p-8"
            >
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#B9D7F7]/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col items-center text-center">
                <div className="relative -mt-12 h-32 w-32 overflow-hidden rounded-3xl border border-[#B9D7F7]/40 bg-[#1a0a24] shadow-[0_18px_38px_rgba(6,1,18,0.45)]">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover" priority={index === 0} />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle,_#4A274F,_#15081c)] text-3xl font-semibold text-[#DCD4F4]">
                      {member.initials}
                    </div>
                  )}
                </div>
                <div className="mt-8 space-y-3">
                  <h3 className="font-display text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B9D7F7]">{member.role}</p>
                  <p className="text-sm text-[#DCD4F4]/80">{member.focus}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 text-[#B9D7F7]">
                  <a
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#B9D7F7] hover:text-white focus-ring-brand"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#DCD4F4]/60">Connect</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
