import { IComponentWithChildren } from "@/types"

const PageSection = (props: IComponentWithChildren) => {
  const { children } = props
  return (
    <section className="flex flex-col items-center">
      <div className="flex max-w-[1240px] w-full flex-col items-center gap-20">
        {children}
      </div>
    </section>
  )
}

export default PageSection
