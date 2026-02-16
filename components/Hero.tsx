"use client"
import Image from "next/image"
import { HeroHeading, HeroSubHeading, HeroFirstButton, HeroSecondButton, HeroImage } from "@/data"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-x-hidden flex flex-col lg:flex-row px-5 lg:px-10 pt-40 lg:pt-0 justify-between items-center lg:items-center">
      <div className="flex flex-col gap-10 md:gap-9 -mt-10 lg:mt-20">
        <h1 className="text-[#222222] albert_sans text-[40px] lg:text-[60px] xl:text-[70px] tracking-[-2%] leading-[110%] max-w-full sm:max-w-md lg:max-w-2xl xl:max-w-3xl">{HeroHeading}</h1>

        <h2 className="albert_sans text-[20px] lg:text-[24px] text-[#222222] opacity-70 tracking-[-2%] leading-[150%] max-w-[90%] md:max-w-md lg:max-w-xl 2xl:max-w-130">{HeroSubHeading}</h2>

        <div className="flex flex-col sm:flex-row albert_sans gap-5 font-medium te00 text-[20px]">
          <button
            onClick={e => {
              e.preventDefault()
              window.open("https://calendly.com/digitalwinsolutions/30min", "_blank", "noopener,noreferrer")
            }}
            className="bg-[#A4BA8C] text-[#f4f2f1] px-10 xl:px-26 py-3 cursor-pointer transition-all duration-300 hover:opacity-85"
          >
            {HeroFirstButton}
          </button>

          <button
            onClick={e => {
              e.preventDefault()
              const target = document.getElementById("services")
              if (target) {
                target.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-[#f4f2f1] text-[#A4BA8C] b-[#A4BA8C] border-2 px-14 py-3 cursor-pointer"
          >
            {HeroSecondButton}
          </button>
        </div>
      </div>

      <Image className="rounded-[25px] mt-20 lg:mt-0 max-w-[90%] lg:max-w-90 h-auto xl:max-w-none" src={HeroImage} width={550} height={540} alt="hero" />
    </section>
  )
}

export default Hero
