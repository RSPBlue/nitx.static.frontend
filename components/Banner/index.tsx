"use client"

import labels from "@/labels"

const Banner = () => {
  const { banner } = labels
  
  return (
    <div
      id="top"
      className="banner relative flex justify-center xl:justify-end h-screen xl:p-10"
    >
      <h1 className="font-oswald items-center xl:items-end px-10 gap-10 xl:gap-0 text-brand-dark xl:text-brand flex h-full w-full xl:w-1/2 flex-col justify-center font-bold">
        <span className="animate-fade-in text-center xl:text-start text-4xl lg:text-6xl">
          {banner.preffixTitle}
        </span>
        <span className="animate-fade-in delay-200 text-center xl:text-start text-6xl lg:text-8xl underline">
          {banner.suffixTitle}
        </span>
      </h1>
    </div>
  )
}

export default Banner
