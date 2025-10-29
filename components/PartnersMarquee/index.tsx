"use client"

import Marquee from "react-fast-marquee"
import { logoConfigs } from "./configs"
import Image from "next/image"

const PartnersMarquee = () => {
  return (
    // Aqui o id de competencias é setado no marquee para o header não sobrepor o conteúdo.
    <section id="competencies" className="w-full py-8 bg-white">
      <Marquee
        speed={150}
        gradient={false}
        pauseOnHover
        className="flex items-center overflow-hidden"
      >
        {logoConfigs.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center mx-8 h-16 w-32"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              fill={false}
              priority
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default PartnersMarquee
