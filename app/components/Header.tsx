"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Solutions", href: "#services" },
    { title: "Clients", href: "#clients" },
    { title: "Projects", href: "#projects" },
    { title: "Team", href: "#team" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#15081c]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-3 text-[#DCD4F4]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DITRONICS-COMPANY-LOGO-w1s8tde4H97TGaCg0k6StC2lxO31JQ.png"
              alt="DITRONICS Logo"
              width={44}
              height={44}
              className="rounded-full border border-white/10"
            />
            <div>
              <span className="block text-xs uppercase tracking-[0.4em] text-[#B9D7F7]">Ditronics</span>
              <span className="font-display text-xl font-semibold leading-none">Precision Systems</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-[#DCD4F4]/80 transition-colors hover:text-white"
              >
                {item.title}
              </Link>
            ))}
            <Button
              className="rounded-full bg-[#4a274f] px-6 py-2 text-sm font-semibold text-[#F6F1FF] shadow-[0_10px_30px_rgba(74,39,79,0.45)] transition hover:bg-[#5c2d63]"
              asChild
            >
              <Link href="#contact">Start a project</Link>
            </Button>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-[#DCD4F4] transition hover:border-[#B9D7F7] hover:text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="space-y-4 pb-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[#DCD4F4] transition hover:border-[#B9D7F7]/70 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button
                  asChild
                  className="w-full rounded-full bg-[#4a274f] py-6 text-base font-semibold text-[#F6F1FF] hover:bg-[#5c2d63]"
                >
                  <Link href="#contact" className="block w-full text-center">
                    Start a project
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
