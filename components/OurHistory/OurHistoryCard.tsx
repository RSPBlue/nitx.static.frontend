import { ICardProps } from "@/types"

const OurHistoryCard = (props: ICardProps) => {
  const { title, children } = props
  return (
    <div className="bg-brand blue-card-shadow text-background items-center flex aspect-square w-1/4 flex-col gap-2 rounded-[20%] px-3 py-12">
      <h3 className="font-oswald text-[60px] font-extrabold">{title}</h3>
      <p className="text-[21px] text-center font-light">{children}</p>
    </div>
  )
}

export default OurHistoryCard
