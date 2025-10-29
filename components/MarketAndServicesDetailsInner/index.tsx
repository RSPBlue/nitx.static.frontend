"use client"

import labels from "@/labels"
import PageSection from "../PageSection"
import MarketAndServicesInnerCard from "./Card"

const MarketAndServicesDetailsInner = () => {
  const {
    marketAndServices: { innerCards },
  } = labels

  return (
    <PageSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:flex-row">
        {innerCards.map(({ title, content }) => (
          <MarketAndServicesInnerCard key={title} title={title}>
            {content}
          </MarketAndServicesInnerCard>
        ))}
      </div>
    </PageSection>
  )
}

export default MarketAndServicesDetailsInner
