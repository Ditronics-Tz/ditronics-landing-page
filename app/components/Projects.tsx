"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "SACAS",
    description: "Smart Access Control and Attendance platform securing institutions across Tanzania.",
    image: "/images/projects/sacas-preview.png",
    link: "https://sacas.ditronics.co.tz/",
    sector: "Education & Government",
  },
  {
    title: "ADHIMKITCHEN",
    description: "Digitised culinary operations with inventory intelligence and immersive customer experiences.",
    image: "/images/projects/adhimkitchen-preview.png",
    link: "https://adhimkitchen.ditronics.co.tz/login",
    sector: "Hospitality",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(74,39,79,0.18),_transparent_65%)]" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#B9D7F7]">Case Studies</span>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Digital ecosystems engineered for measurable impact.</h2>
          <p className="mt-6 text-lg text-[#DCD4F4]/80">
            Each engagement blends hardware, software, and content strategies to unlock new efficiency and experiences for
            our partners.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(18,6,26,0.92),rgba(74,39,79,0.35))] p-8"
            >
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-[#B9D7F7]/10 blur-2xl transition group-hover:scale-110" />
              <div className="relative space-y-6">
                <div className="relative h-48 overflow-hidden rounded-3xl border border-white/10">
                  <Image src={project.image} alt={project.title} fill className="object-contain bg-[#12061a]" priority={index === 0} />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#12061a]/0 via-transparent to-[#4A274F]/40" />
                  <span className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.35em] text-[#B9D7F7]">
                    {project.sector}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
                  <p className="text-base text-[#DCD4F4]/80">{project.description}</p>
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B9D7F7] transition group-hover:gap-4"
                >
                  View project dossier
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
