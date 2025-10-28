import { IComponentWithChildren } from "@/types"
import { StaticImageData } from "next/image"

export interface IPartnershipCard extends IComponentWithChildren {
  partnerLogoSrc: StaticImageData
}
