import { RelationType } from "react-archer/lib/types"
import { AppArcherContainerPosition } from "./types"
import { getLineType } from "./utils"

export const mappedArcherRelations = new Map<
  AppArcherContainerPosition,
  RelationType[]
>([
  [
    "left",
    [
      {
        targetId: "center-content-1",
        targetAnchor: "left",
        sourceAnchor: "right",
        style: getLineType("curve"),
      },
    ],
  ],
  [
    "top",
    [
      {
        targetId: "center-content-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        style: getLineType("angle"),
      },
    ],
  ],
  [
    "center",
    [
      {
        targetId: "bottom-content-1",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        style: getLineType("angle"),
      },
    ],
  ],
  [
    "right",
    [
      {
        targetId: "center-content-3",
        targetAnchor: "right",
        sourceAnchor: "left",
        style: getLineType("curve"),
      },
    ],
  ],
])
