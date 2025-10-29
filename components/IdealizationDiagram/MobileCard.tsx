"use client"

import { ICardProps } from "@/types"
import { BadgeCheck, LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react"

const IdealizationMobileCard = (
  props: ICardProps & {
    Icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >
  },
) => {
  const { title, Icon, children } = props
  return (
    <div className="flex flex-1 items-center max-w-xl justify-center min-w-2xs col-span-full sm:col-span-6 md:col-span-4">
      <figure className="text-foreground-accent justify-center flex w-1/3">
        {Icon ? <Icon size={32} /> : <BadgeCheck size={32} />}
      </figure>
      <div className="flex flex-col justify-center w-2/3">
        <p>{title}</p>
        <span className="font-unbounded text-xs font-light text-foreground">
          {children}
        </span>
      </div>
    </div>
  )
}

export default IdealizationMobileCard
