"use client"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import WhyUs from "@/components/WhyUs"
import Services from "@/components/Services"
import Faq from "@/components/Faq"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Lenis from "lenis"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <WhyUs />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
