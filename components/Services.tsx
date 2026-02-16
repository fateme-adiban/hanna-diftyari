"use client"
import { ServicesHeading, ServicesSubHeading, Card_1_Number, Card_1_Heading, Card_1_Content, Card_1_Button, Card_2_Number, Card_2_Heading, Card_2_Content, Card_2_Button, Card_3_Number, Card_3_Heading, Card_3_Content, Card_3_Button } from "@/data"

const Services = () => {
  return (
    <section id="services" className="relative min-h-screen overflow-x-hidden flex flex-col items-center mt-50 gap-30 md:gap-45 md:px-5">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="albert_sans text-[45px] xl:text-[65px] tracking-[-2%] text-[#222222] leading-[110%] max-w-[95%] md:max-w-none">{ServicesHeading}</h2>
        <p className="text-[#222222] opacity-70 albert_sans text-[20px] lg:text-[24px] leading-[110%] max-w-[95%] md:max-w-none">{ServicesSubHeading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-5 md:gap-y-12 lg:gap-15 justify-items-center">
        <div className="flex flex-col bg-white max-w-[90%] lg:max-w-107.5 min-h-167.75 border-2 border-[#A4BA8C] px-6 py-8">
          <div className="flex flex-col gap-12 flex-1">
            <p className="albert_sans text-[28px] lg:text-[32px] text-[#A5B68D]">{Card_1_Number}</p>
            <h2 className="albert_sans text-[28px] lg:text-[32px] tracking-[-2%] leading-[110%]">{Card_1_Heading}</h2>

            <div className="flex flex-col items-start gap-0.5">
              {Card_1_Content.map((item, index) => (
                <p key={index} className="text-[#222222] opacity-70 albert_sans text-[16px] xl:text-[18px] leading-[150%] max-w-110">
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          <button
            onClick={e => {
              e.preventDefault()
              window.open("https://calendly.com/digitalwinsolutions/30min", "_blank", "noopener,noreferrer")
            }}
            className="mt-8 xl:mt-auto bg-[#A4BA8C] text-[#f4f2f1] px-5 lg:px-0 2xl:px-20 py-3 cursor-pointer text-[18px] md:text-[20px] font-medium transition-all duration-300 hover:opacity-85"
          >
            {Card_1_Button}
          </button>
        </div>

        <div className="flex flex-col bg-white max-w-[90%] lg:max-w-107.5 min-h-167.75 border-2 border-[#A4BA8C] px-6 py-8">
          <div className="flex flex-col gap-12 flex-1">
            <p className="albert_sans text-[28px] lg:text-[32px] text-[#A5B68D]">{Card_2_Number}</p>
            <h2 className="albert_sans text-[28px] lg:text-[32px] tracking-[-2%] leading-[110%]">{Card_2_Heading}</h2>

            <div className="flex flex-col items-start gap-0.5">
              {Card_2_Content.map((item, index) => (
                <p key={index} className="text-[#222222] opacity-70 albert_sans text-[16px] xl:text-[18px] leading-[150%] max-w-110">
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          <button
            onClick={e => {
              e.preventDefault()
              window.open("https://calendly.com/digitalwinsolutions/30min", "_blank", "noopener,noreferrer")
            }}
            className="mt-8 xl:mt-auto bg-[#A4BA8C] text-[#f4f2f1] px-0 2xl:px-18 py-3 cursor-pointer text-[18px] md:text-[20px] font-medium transition-all duration-300 hover:opacity-85"
          >
            {Card_2_Button}
          </button>
        </div>

        <div className="flex flex-col bg-white max-w-[90%] lg:max-w-107.5 min-h-167.75 border-2 border-[#A4BA8C] px-6 py-8">
          <div className="flex flex-col gap-12 flex-1">
            <p className="albert_sans text-[28px] lg:text-[32px] text-[#A5B68D]">{Card_3_Number}</p>
            <h2 className="albert_sans text-[28px] lg:text-[32px] tracking-[-2%] leading-[110%] max-w-[90%] sm:max-w-90">{Card_3_Heading}</h2>

            <div className="flex flex-col items-start gap-0.5">
              {Card_3_Content.map((item, index) => (
                <p key={index} className="text-[#222222] opacity-70 albert_sans text-[16px] xl:text-[18px] leading-[150%] max-w-110">
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          <button
            onClick={e => {
              e.preventDefault()
              window.open("https://calendly.com/digitalwinsolutions/30min", "_blank", "noopener,noreferrer")
            }}
            className="mt-8 xl:mt-auto bg-[#A4BA8C] text-[#f4f2f1] px-5 xl:px-20 py-3 cursor-pointer text-[18px] md:text-[20px] font-medium transition-all duration-300 hover:opacity-85"
          >
            {Card_3_Button}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
