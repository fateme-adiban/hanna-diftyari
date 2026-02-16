"use client"
import { list_items_1, list_items_2 } from "../data"

const Footer = () => {
  return (
    <footer className="relative h-112.5 md:h-162.5 lg:min-h-screen overflow-hidden flex flex-col justify-between mt-20 px-5 pb-5">
      <div className="flex justify-between items-start md:px-10 xl:px-30 lg:mt-20">
        <div className="flex flex-col text-[18px] lg:text-[30px] albert_sans text-[#222222] opacity-70 tracking-[-2%]">
          <h3 className="border-b-2 w-37.5 sm:w-[40vw] border-[#A4BA8C] text-[30px] lg:text-[35px] 2xl:w-137.5 instrument_serif tracking-normal">Menu</h3>
          <ul className="mt-3.5">
            {list_items_1.map((list_item, index) => {
              const sectionId = list_item.toLowerCase()
              return (
                <li className="py-0.75" key={index}>
                  <a
                    href={`#${sectionId}`}
                    onClick={e => {
                      e.preventDefault()
                      const target = document.getElementById(sectionId)
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    {list_item}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col text-[18px] lg:text-[30px] albert_sans text-[#222222] opacity-70 tracking-[-2%]">
          <h3 className="border-b-2 border-[#A4BA8C] instrument_serif tracking-normal text-[30px] lg:text-[35px] w-37.5 sm:w-[40vw] 2xl:w-137.5">Socials</h3>
          <ul className="mt-3.5">
            {list_items_2.map((item, index) => (
              <li className="py-0.75" key={index}>
                <a
                  href={item.url}
                  onClick={e => {
                    e.preventDefault()
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between w-full text-[#222222] opacity-80 text-[14px] lg:text-[18px] albert_sans text-center lg:text-left">
        <p>© 2026 Hanna Diftyari, All rights reserved</p>

        <p
          onClick={e => {
            e.preventDefault()
            window.open("https://www.linkedin.com/in/fateme-adiban", "_blank", "noopener,noreferrer")
          }}
          className="cursor-pointer text-[#859173]"
        >
          Made by Fateme Adiban
        </p>
      </div>
    </footer>
  )
}

export default Footer
