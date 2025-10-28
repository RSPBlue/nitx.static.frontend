import classNames from "classnames"
import { IMarketAndServicesDetailsOuterCardProps } from "./types"

const MarketAndServicesOuterCard = (
  props: IMarketAndServicesDetailsOuterCardProps,
) => {
  const { title, alignEnd, children } = props
  return (
    <div className="flex flex-col gap-1 h-full">
      <h4
        className={classNames(
          "text-foreground-accent px-4 font-oswald font-semibold text-2xl",
          { "text-end": alignEnd, "text-start": !alignEnd },
        )}
      >
        {title}
      </h4>
      <p
        className={classNames(
          "border border-white rounded-xl h-full text-sm bg-secondary py-4 px-10 text-white",
          {
            "text-start": !alignEnd,
            "text-end": alignEnd,
          },
        )}
      >
        {children}
      </p>
    </div>
  )
}

export default MarketAndServicesOuterCard
