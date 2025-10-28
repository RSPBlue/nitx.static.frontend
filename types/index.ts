import { ReactNode } from "react"

export interface IComponentWithChildren {
  children: ReactNode
}

export interface ICardProps extends IComponentWithChildren {
  title: string
  className?: string
}
