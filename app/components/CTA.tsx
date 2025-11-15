"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,39,79,0.35),_transparent_70%)]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[36px] border border-[#B9D7F7]/20 bg-[#4A274F] p-12 text-center shadow-[0_45px_90px_rgba(26,7,34,0.55)]"
        >
          <div className="mx-auto max-w-3xl space-y-6 text-[#F6F1FF]">
            <p className="text-xs uppercase tracking-[0.35em] text-[#B9D7F7]">Partner with Ditronics</p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Ready to orchestrate the hardware, software, and storytelling behind your next market-shifting move?
            </h2>
            <p className="text-lg text-[#DCD4F4]/80">
              Book a joint innovation session to map your roadmap, validate technical assumptions, and visualise the launch
              narrative in one sprint.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#4A274F] hover:bg-[#DCD4F4]"
              >
                Book the session
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/60 bg-transparent px-10 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:bg-white/10"
              >
                View credentials deck
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
