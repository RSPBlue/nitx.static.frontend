"use client"

import { useMediaQuery } from "@uidotdev/usehooks"
import { useMemo } from "react"

interface IMediaQueryOptions {
  limitType: "min" | "max"
  pixelLimit: number
}

const useApplicationMediaQuery = (
  options: IMediaQueryOptions | [number, number],
) => {
  const mq = useMemo(() => {
    if (Array.isArray(options)) {
      const [minLimit, maxLimit] = options.sort(
        (pixelLimit, comparisonPixelLimit) => pixelLimit - comparisonPixelLimit,
      )
      return `only screen and (min-width: ${minLimit}px) and (max-width: ${maxLimit}px)`
    }

    return `only screen and (${options.limitType}-width: ${options.pixelLimit}px)`
  }, [options])

  const mqConditional = useMediaQuery(mq)

  return mqConditional
}

export default useApplicationMediaQuery
