"use client"

import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50"
    >
      <div className="bg-[#2b1233]/70 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3 py-2 text-xs md:flex-row md:items-center md:justify-between md:text-sm text-[#DCD4F4]">
            <div className="flex flex-wrap items-center gap-4 font-medium tracking-wide">
              <a
                href="tel:+255717203759"
                className="flex items-center gap-2 transition-colors hover:text-[#B9D7F7] focus-ring-brand"
              >
                <Phone className="h-4 w-4" />
                <span>+255 717 321 753</span>
              </a>
              <span className="hidden h-4 w-px bg-white/20 md:block" aria-hidden="true" />
              <a
                href="mailto:info@ditronics.co.tz"
                className="flex items-center gap-2 transition-colors hover:text-[#B9D7F7] focus-ring-brand"
              >
                <Mail className="h-4 w-4" />
                <span>info@ditronics.co.tz</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-[#B9D7F7]">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => {
                const label = Icon.displayName ?? Icon.name ?? "social"
                return (
                <a
                  key={index}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B9D7F7] hover:text-[#DCD4F4] focus-ring-brand"
                  aria-label={`Visit our ${label} page`}
                >
                  <Icon className="h-4 w-4" />
                </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B9D7F7]/40 to-transparent" aria-hidden="true" />
      </div>
    </motion.div>
  )
}
