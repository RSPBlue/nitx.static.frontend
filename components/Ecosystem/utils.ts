import { LineType, ValidLineStyles } from "react-archer/lib/types"

export const getLineType = (lineStyle?: ValidLineStyles): LineType => ({
  strokeColor: "#0d5cdf",
  endMarker: false,
  strokeWidth: 1,
  lineStyle,
})
