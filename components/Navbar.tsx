"use client"
import { NavItems } from "../data"

const Navbar = () => {
  return (
    <nav className="text-[#222222] flex justify-between pt-8 px-5 md:px-10 albert_sans text-[18px] font-medium uppercase ">
      <p>hanna diftyari</p>

      <div className="hidden md:flex gap-2 md:gap-10">
        {NavItems.map((item, index) => {
          const sectionId = item.toLowerCase()
          return (
            <p
              key={index}
              onClick={e => {
                e.preventDefault()
                const target = document.getElementById(sectionId)
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="cursor-pointer transition-all duration-300 hover:opacity-60"
            >
              {item}
            </p>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
