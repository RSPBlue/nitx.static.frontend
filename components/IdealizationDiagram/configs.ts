import { LineType, RelationType } from "react-archer/lib/types"

const strokeStyle: LineType = {
  strokeColor: "#dadcde",
  endMarker: false,
  strokeWidth: 1,
}

export const getIdealizationArcherRelations = (
  side: "left" | "right",
  row: number,
): RelationType[] => [
  {
    targetId: `center-${side}-${row}`,
    targetAnchor: side,
    sourceAnchor: side === "left" ? "right" : "left",
    style: strokeStyle,
  },
]
