"use client"

import Title from "@/Layout/Title"
import PageSection from "../PageSection"
import OurHistoryCard from "./OurHistoryCard"
import labels from "@/labels"

const OurHistory = () => {
  const { links, history } = labels

  return (
    <PageSection id={links.history}>
      <Title color="black">
        {history.thinTitle}{" "}
        <strong className="text-brand">{history.boldTitle}</strong>
      </Title>
      <div className="grid grid-cols-4 gap-4">
        {history.cards.map((card) => (
          <OurHistoryCard key={card.title} title={card.title}>
            {card.subtitle}
          </OurHistoryCard>
        ))}
      </div>
      <p>{history.subtitle}</p>
    </PageSection>
  )
}

export default OurHistory
