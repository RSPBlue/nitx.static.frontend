"use client"

import { IComponentWithChildren } from "@/types"
import classNames from "classnames"

const PageSection = (props: IComponentWithChildren & { id?: string }) => {
  const { id, children } = props
  return (
    <section
      id={id}
      className={classNames("flex flex-col items-center", {
        "pt-28": id,
      })}
    >
      <div className="flex max-w-[1240px] w-full flex-col items-center gap-20 px-4">
        {children}
      </div>
    </section>
  )
}

export default PageSection
