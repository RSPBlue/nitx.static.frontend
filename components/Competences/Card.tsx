import { ICardProps } from "@/types"
import classNames from "classnames"

const CompetenciesCard = (props: ICardProps & { titleClassName?: string }) => {
  const { title, titleClassName, children, className } = props

  return (
    <div
      className={classNames(
        "flex flex-col rounded-2xl overflow-hidden",
        className,
      )}
    >
      <h3
        className={classNames(
          "bg-tertiary text-secondary font-oswald font-bold text-base p-4",
          titleClassName,
        )}
      >
        {title}
      </h3>
      <div className="p-4 text-xs">{children}</div>
    </div>
  )
}

export default CompetenciesCard
