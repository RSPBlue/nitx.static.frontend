"use client"

import ArrowUpRightIcon from "@/public/arrow-up-right.svg"
import Image from "next/image"
import { ArcherElement } from "react-archer"
import { IDeliverCardProp } from "./types"

const CardDeliver = (prop: IDeliverCardProp) => {
  const { archerId, children } = prop
  return (
    <div className="flex gap-4 text-xl font-medium">
      {archerId ? (
        <ArcherElement id={archerId}>
          <Image
            src={ArrowUpRightIcon}
            alt="Seta apontada para a diagonal superior direita"
            className="w-8 aspect-square"
          />
        </ArcherElement>
      ) : (
        <Image
          src={ArrowUpRightIcon}
          alt="Seta apontada para a diagonal superior direita"
          className="w-8 aspect-square"
        />
      )}
      <p>
        <span className="px-1 h-fit bg-yellow text-brand flex-1">
          {children}
        </span>
      </p>
    </div>
  )
}

export default CardDeliver
