import { LineType, ValidLineStyles } from "react-archer/lib/types"

export const getLineType = (
  lineStyle?: ValidLineStyles,
  endMarker = false,
): LineType => ({
  strokeColor: "#0d5cdf",
  endMarker,
  strokeWidth: 1,
  lineStyle,
})
