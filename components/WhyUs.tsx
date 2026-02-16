"use client"
import { WhyUsHeading, WhyUsContent, WhyUSButton } from "@/data"

const WhyUs = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden flex flex-col items-center mt-40 gap-25 px-5 lg:px-0">
      <div className="flex flex-col text-center">
        <h2 className="albert_sans text-[48px] xl:text-[65px] tracking-[-2%] text-[#222222] max-w-full leading-[110%]">{WhyUsHeading}</h2>
      </div>

      <div className="flex flex-col items-start gap-15">
        <div className="flex flex-col items-start gap-12">
          {WhyUsContent.map((item, index) => (
            <p key={index} className={`text-[#222222] opacity-70 albert_sans text-[22px] lg:text-[24px] leading-[150%] tracking-[-2%] sm:max-w-110 max-w-[90%] ${item.weight === "semibold" ? "font-semibold" : "font-normal"} ${item.italic ? "italic" : ""}`}>
              {item.text}
            </p>
          ))}
        </div>
        <div></div>
        <button
          onClick={e => {
            e.preventDefault()
            window.open("https://calendly.com/digitalwinsolutions/30min", "_blank", "noopener,noreferrer")
          }}
          className="self-center sm:self-start bg-[#A4BA8C] text-[#f4f2f1] px-21 xl:px-26 py-3 cursor-pointer text-[22px] font-medium transition-all duration-300 hover:opacity-85"
        >
          {WhyUSButton}
        </button>
      </div>
    </section>
  )
}

export default WhyUs
