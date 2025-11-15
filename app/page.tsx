import TopBar from "./components/TopBar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Clients from "./components/Clients"
import Projects from "./components/Projects"
import Team from "./components/Team"
import CTA from "./components/CTA"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="space-y-8">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Projects />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
