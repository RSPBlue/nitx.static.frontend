import { ICardProps } from "@/types"

const MarketAndServicesInnerCard = (props: ICardProps) => {
  const { title, children } = props

  return (
    <div className="flex flex-col gap-8">
      <h4 className="text-foreground-accent textsm font-oswald font-semibold text-2xl">
        {title}
      </h4>
      <p className="text-background text-sm">{children}</p>
    </div>
  )
}

export default MarketAndServicesInnerCard
