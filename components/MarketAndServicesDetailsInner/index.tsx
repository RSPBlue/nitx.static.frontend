"use client"

import PageSection from "../PageSection"
import MarketAndServicesInnerCard from "./Card"

const MarketAndServicesDetailsInner = () => {
  return (
    <PageSection>
      <div className="flex justify-between items-stretch gap-10">
        <MarketAndServicesInnerCard title="BANKING">
          Atendemos bancos tradicionais e digitais com soluções para core
          bancário, onboarding, crédito, Pix, Open Finance e segurança
          operacional.
        </MarketAndServicesInnerCard>

        <MarketAndServicesInnerCard title="FINANCIAL SERVICES">
          Apoiamos fintechs, adquirentes, subadquirentes e plataformas de
          crédito com tecnologias para pagamentos, liquidação, conciliação e
          análise de risco.
        </MarketAndServicesInnerCard>

        <MarketAndServicesInnerCard title="INSURANCE">
          Desenvolvemos soluções para seguradoras e corretoras em sinistros,
          apólices, subscrição, assistência digital e integração com o
          ecossistema Susep/Open Insurance.
        </MarketAndServicesInnerCard>

        <MarketAndServicesInnerCard title="INDUSTRY & OTHERS">
          Oferecemos sistemas sob medida para indústrias e serviços diversos,
          com foco em automação, gestão operacional, integração de dados e
          inteligência analítica.
        </MarketAndServicesInnerCard>
      </div>
    </PageSection>
  )
}

export default MarketAndServicesDetailsInner
