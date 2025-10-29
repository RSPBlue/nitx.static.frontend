"use client"

import Title from "@/Layout/Title"
import PageSection from "../PageSection"
import OurHistoryCard from "./OurHistoryCard"

const OurHistory = () => {
  return (
    <PageSection id="history">
      <Title color="black">
        NOSSA <strong className="text-brand">HISTÓRIA</strong>
      </Title>
      <div className="grid grid-cols-4 gap-4">
        <OurHistoryCard title="+DE 120">Colaboradores</OurHistoryCard>
        <OurHistoryCard title="+20">Anos de atuação no Mercado</OurHistoryCard>
        <OurHistoryCard title="+DE 100">
          desenvolvedores especializados
        </OurHistoryCard>
        <OurHistoryCard title="+DE 25">
          especialistas em gestão de investimentos
        </OurHistoryCard>
      </div>
      <p>
        A união das “marcas originais” desta Joint Venture, cria uma organização
        poderosa, com mais de 20 anos de experiência, liderança e inovação no
        mercado de tecnologia, somando o poder de fogo de mais de mais 120
        colaboradores, mais de 100 desenvolvedores especializados e mais de 25
        especialistas em gestão de investimentos.
      </p>
    </PageSection>
  )
}

export default OurHistory
