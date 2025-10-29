"use client"

import Title from "@/Layout/Title"
import PageSection from "../PageSection"
import Pillar from "./Pillar"
import labels from "@/labels"

const WordviewPillars = () => {
  const { links, pillars } = labels

  return (
    <PageSection id={links.pillars}>
      <div className="flex flex-col gap-20 w-full">
        <div className="flex flex-col">
          <Title color="white">
            {pillars.thinTitle} <strong>{pillars.boldTitle}</strong>
          </Title>
          <h3 className="font-light text-foreground-accent text-center text-[23px]">
            {pillars.thinSubtitle}
            <strong>{pillars.boldSubtitle}</strong>
          </h3>
        </div>
        <div className="flex justify-between w-full gap-10 flex-wrap">
          {pillars.cards.map((card, index) => (
            <Pillar key={index}>{card}</Pillar>
          ))}
        </div>
        <p className="bg-foreground-accent text-secondary text-center font-normal pb-2">
          {pillars.footerContent}
        </p>
      </div>
    </PageSection>
  )
}

export default WordviewPillars
