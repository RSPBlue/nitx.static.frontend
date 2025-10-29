export type AppArcherContainerPosition = "left" | "right" | "top" | "center"

export interface IEcosystemCardConfigs {
  desktopOrder: number
  mobileOrder: number
  title: string
  items: string[]
  side: AppArcherContainerPosition
}

export interface IEcosystemCardPositions {
  leftCard: IEcosystemCardConfigs | null
  topCard: IEcosystemCardConfigs | null
  rightCard: IEcosystemCardConfigs | null
}
