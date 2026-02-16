"use client"
import { ContactHeading, ContactButton } from "@/data"

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-209.25 overflow-x-hidden flex flex-col justify-center items-center xl:items-end bg-[url('/contact-bg.png')] bg-cover bg-center bg-no-repeat mt-30 md:mt-20 lg:mt-50 xl:px-20 px-5">
      <div className="flex flex-col items-center xl:items-start gap-20 xl:gap-10 text-center xl:text-left">
        <p className="text-white text-[40px] xl:text-[50px] albert_sans max-w-130 lg:max-w-135 leading-[110%] xl:mt-65">{ContactHeading}</p>
        <button
          onClick={e => {
            e.preventDefault()
            window.open("https://calendly.com/digitalwinsolutions/30min", "_blank", "noopener,noreferrer")
          }}
          className="bg-[#A4BA8C] text-[#f4f2f1] px-10 xl:px-26 py-3 cursor-pointer text-[22px] font-medium transition-all duration-300 hover:opacity-85"
        >
          {ContactButton}
        </button>
      </div>
    </section>
  )
}

export default Contact
