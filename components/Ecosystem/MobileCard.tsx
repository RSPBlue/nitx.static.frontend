"use client"

import { ICardProps } from "@/types"
import { ArrowBigRightDash } from "lucide-react"

const EcosystemMobileCard = (
  props: Omit<ICardProps, "children"> & { list: string[] },
) => {
  const { title, list } = props
  const uniqueList = [...new Set(list)]

  return (
    <div className="p-4 flex flex-col bg-blue-50 gap-8 border-2 rounded-xl border-brand min-w-1/4 justify-self-end w-full">
      <h4 className="text-2xl text-brand font-oswald font-semibold uppercase text-center">
        {title}
      </h4>
      <ul className="flex flex-col gap-4">
        {/* Como a lista nao se alterará apos o primeiro render, o index pode ser usado como key. */}
        {uniqueList.map((item, index) => (
          <li key={index} className="flex w-fit gap-4 sm:gap-10 items-center">
            <figure className="min-w-fit text-brand">
              <ArrowBigRightDash size={32} />
            </figure>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EcosystemMobileCard
