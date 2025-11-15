"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(74,39,79,0.18),_transparent_70%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#B9D7F7]">Start the conversation</span>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Let’s co-design your next flagship launch.</h2>
          <p className="mt-6 text-lg text-[#DCD4F4]/80">
            Share a challenge, an idea, or a mandate. Our specialists will craft an engagement blueprint within two
            working days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-16 grid gap-10 rounded-[32px] border border-white/10 bg-[#12061a]/80 p-10 shadow-[0_40px_80px_rgba(6,1,18,0.55)] md:grid-cols-[0.8fr_1fr]"
        >
          <div className="space-y-8 text-sm text-[#DCD4F4]/80">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#B9D7F7]">Response window</p>
              <p className="mt-3 text-lg font-semibold text-white">48 hours</p>
              <p className="mt-2 text-sm text-[#DCD4F4]/70">Your enquiry lands directly with our strategy directors.</p>
            </div>
            <div className="space-y-4">
              {[{ icon: Phone, label: "+255 717 321 753" }, { icon: Mail, label: "info@ditronics.co.tz" }, { icon: MapPin, label: "Dar es Salaam · Remote-first" }].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-[#B9D7F7]" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-xs uppercase tracking-[0.3em] text-[#B9D7F7]/70">
              <p>Secure NDAs available</p>
              <p>Onsite discovery labs</p>
              <p>Global remote collaboration</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                type="text"
                placeholder="Full name"
                className="h-12 rounded-full border-white/10 bg-[#0d0414] text-[#F6F1FF] placeholder:text-[#DCD4F4]/50"
              />
              <Input
                type="email"
                placeholder="Work email"
                className="h-12 rounded-full border-white/10 bg-[#0d0414] text-[#F6F1FF] placeholder:text-[#DCD4F4]/50"
              />
            </div>
            <Input
              type="text"
              placeholder="Project ambition"
              className="h-12 rounded-full border-white/10 bg-[#0d0414] text-[#F6F1FF] placeholder:text-[#DCD4F4]/50"
            />
            <Textarea
              placeholder="Tell us about the impact you’re targeting"
              rows={6}
              className="rounded-3xl border-white/10 bg-[#0d0414] text-[#F6F1FF] placeholder:text-[#DCD4F4]/50"
            />
            <Button
              type="submit"
              className="w-full rounded-full bg-[#4A274F] py-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#F6F1FF] shadow-[0_22px_50px_rgba(74,39,79,0.45)] transition hover:bg-[#5c2d63]"
            >
              Send briefing
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
