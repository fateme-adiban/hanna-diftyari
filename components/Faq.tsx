"use client"
import { useState } from "react"

import { FaqHeading, FaqSubHeading, faqs } from "@/data"
import Image from "next/image"

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggle = (index: number) => {
    setOpenIndexes(prev => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="relative min-h-screen overflow-x-hidden flex flex-col items-center mt-55 gap-20 md:gap-35 px-5 xl:px-0">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="albert_sans text-[40px] xl:text-[65px] tracking-[-2%] text-[#222222] leading-[110%] max-w-[95%] md:max-w-none">{FaqHeading}</h2>
        <p className="text-[#222222] opacity-70 albert_sans text-[20px] lg:text-[24px] leading-[110%] max-w-[95%] md:max-w-none">{FaqSubHeading}</p>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index)

          return (
            <div onClick={() => toggle(index)} key={index} className={`transition-all duration-500 ${isOpen ? "bg-[#f4f2f1] border-2 border-transparent" : "bg-white border-2 border-[#A5B68D]"}`}>
              <button className="cursor-pointer flex justify-between gap-3 lg:gap-0 items-center w-full text-left px-3 md:px-8 py-5 md:py-7 text-[20px] lg:text-[24px] tracking-[-2%] text-[#222222] albert_sans">
                {faq.question}
                <Image src="/plus-icon.png" height={20} width={20} alt="plus icon" className={`max-w-[15px] sm:max-w-none transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} />
              </button>

              <div className={`cursor-pointer overflow-hidden transition-all duration-500 ${isOpen ? "max-h-75 pb-7" : "max-h-0"}`}>
                <p className={`px-3 md:px-8 text-[20px] text-[#888888] leading-[150%] transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Faq
