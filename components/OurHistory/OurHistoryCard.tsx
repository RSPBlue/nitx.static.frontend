"use client"

import { ICardProps } from "@/types"

const OurHistoryCard = (props: ICardProps) => {
  const { title, children } = props
  return (
    <div className="col-span-full sm:col-span-2 xl:col-span-1 flex justify-center items-center">
      <div className="bg-brand blue-card-shadow text-background w-full max-w-[320px] items-center flex aspect-square flex-col gap-2 rounded-[20%] px-3 py-12">
        <h3 className="font-oswald text-[60px] font-extrabold">{title}</h3>
        <p className="text-[21px] text-center font-light">{children}</p>
      </div>
    </div>
  )
}

export default OurHistoryCard
