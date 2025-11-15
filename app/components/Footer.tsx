import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Solutions", href: "#services" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    title: "Expertise",
    items: [
      { label: "Electronics", href: "#services" },
      { label: "Software", href: "#services" },
      { label: "Studios", href: "#services" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[linear-gradient(160deg,#12051a_0%,#1e0a26_45%,#12051a_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(185,215,247,0.15),_transparent_60%)]" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6 text-[#DCD4F4]/80">
            <Link href="/" className="flex items-center gap-4 text-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DITRONICS-COMPANY-LOGO-w1s8tde4H97TGaCg0k6StC2lxO31JQ.png"
                alt="DITRONICS Logo"
                width={52}
                height={52}
                className="rounded-full border border-white/10"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#B9D7F7]">Ditronics</p>
                <p className="font-display text-lg font-semibold text-white">Precision Technology Group</p>
              </div>
            </Link>
            <p>
              We are committed to building technology and media systems that operate flawlessly when stakes are highest.
            </p>
            <div className="flex items-center gap-4 text-[#B9D7F7]">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => {
                const label = Icon.displayName ?? Icon.name ?? "social"
                return (
                  <a
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#B9D7F7] hover:text-white focus-ring-brand"
                    aria-label={`Visit our ${label} page`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4 text-[#DCD4F4]/80">
              <h3 className="font-display text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm transition hover:text-[#B9D7F7]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.3em] text-[#B9D7F7]/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ditronics. All rights reserved.</p>
          <p>ISO-aligned delivery · Data privacy ready · Secure cloud native</p>
        </div>
      </div>
    </footer>
  )
}
