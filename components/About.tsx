"use client"
import { AboutContent, AboutButton } from "@/data"

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center my-35 px-5 lg:px-0">
      <div className="flex flex-col items-start gap-15">
        <div className="flex flex-col items-start gap-12">
          {AboutContent.map((item, index) => (
            <p key={index} className={`text-[#222222] opacity-70 albert_sans text-[22px] lg:text-[24px] leading-[150%] tracking-[-2%] max-w-[90%] sm:max-w-110 ${item.weight === "semibold" ? "font-semibold" : "font-normal"}`}>
              {item.text}
            </p>
          ))}
        </div>
        <button
          onClick={e => {
            e.preventDefault()
            window.open("https://calendly.com/digitalwinsolutions/30min", "_blank", "noopener,noreferrer")
          }}
          className="self-center sm:self-start bg-[#A4BA8C] text-[#f4f2f1] px-21 xl:px-26 py-3 cursor-pointer text-[22px] font-medium transition-all duration-300 hover:opacity-85"
        >
          {AboutButton}
        </button>
      </div>
    </section>
  )
}

export default About
