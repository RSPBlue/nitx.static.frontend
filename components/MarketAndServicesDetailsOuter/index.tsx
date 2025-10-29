"use client"

import labels from "@/labels"
import PageSection from "../PageSection"
import MarketAndServicesOuterCard from "./Card"

const MarketAndServicesDetailsOuter = () => {
  const {
    marketAndServices: { outerCards },
  } = labels
  return (
    <PageSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {outerCards.map(({ title, content, alignEnd }) => (
          <MarketAndServicesOuterCard
            key={title}
            title={title}
            alignEnd={alignEnd}
          >
            {content}
          </MarketAndServicesOuterCard>
        ))}
      </div>
    </PageSection>
  )
}

export default MarketAndServicesDetailsOuter
