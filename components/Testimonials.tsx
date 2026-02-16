import { TestimonialsHeading, TestimonialsSubHeading, Testimonial_Image1, Testimonial_Image2, Testimonial_Image3, Testimonial_Image4, Testimonial_Image5, Testimonial_Image6, Testimonial_Image7, Testimonial_Image8, Testimonial_Image9 } from "@/data"
import Image from "next/image"

const images = [
  { src: Testimonial_Image1, width: 394, height: 300 },
  { src: Testimonial_Image2, width: 500, height: 300 },
  { src: Testimonial_Image3, width: 362, height: 272 },
  { src: Testimonial_Image4, width: 305, height: 300 },
  { src: Testimonial_Image5, width: 500, height: 300 },
  { src: Testimonial_Image6, width: 451, height: 281 },
  { src: Testimonial_Image7, width: 445, height: 300 },
  { src: Testimonial_Image8, width: 500, height: 300 },
  { src: Testimonial_Image9, width: 311, height: 266 }
]

const Testimonials = () => {
  const formattedHeading = TestimonialsHeading.replace(/(\b\w+)([!?.])?$/, '<span class="instrument_serif italic tracking-normal text-[53px] xl:text-[70px]">$1</span>$2')

  return (
    <section id="testimonials" className="relative min-h-screen overflow-x-hidden flex flex-col items-center mt-60 gap-20 sm:gap-35 px-5">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="albert_sans text-[48px] xl:text-[65px] tracking-[-2%] text-[#222222] leading-[110%] max-w-[95%] md:max-w-none" dangerouslySetInnerHTML={{ __html: formattedHeading }} />
        <p className="text-[#222222] opacity-70 albert_sans text-[20px] lg:text-[24px] max-w-[95%] md:max-w-none">{TestimonialsSubHeading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10">
        {images.map((img, index) => (
          <div key={index} className="flex justify-center">
            <Image src={img.src} alt={`Testimonial ${index + 1}`} width={img.width} height={img.height} className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
