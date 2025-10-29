"use client"

import { IComponentWithChildren } from "@/types"
import classNames from "classnames"

const Title = (
  props: IComponentWithChildren & {
    color?: "white" | "brand" | "black"
    className?: string
  },
) => {
  const { children, color, className } = props

  return (
    <h2
      className={classNames(
        "font-oswald text-center text-4xl md:text-6xl font-normal",
        className,
        {
          "text-brand": !color || color === "brand",
          "text-background": color === "white",
          "text-foreground": color === "black",
        },
      )}
    >
      {children}
    </h2>
  )
}

export default Title
