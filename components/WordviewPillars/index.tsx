"use client"

import Title from "@/Layout/Title"
import PageSection from "../PageSection"
import Pillar from "./Pillar"

const WordviewPillars = () => {
  return (
    <PageSection id="pillars">
      <div className="flex flex-col gap-20 w-full">
        <div className="flex flex-col">
          <Title color="white">
            COMO <strong>ENTENDEMOS</strong>
          </Title>
          <h3 className="font-light text-foreground-accent text-center text-[23px]">
            Visão de mundo em <strong>3 pilares</strong>
          </h3>
        </div>
        <div className="flex justify-between w-full gap-2">
          <Pillar>Entender, Apoiar, Inovar.</Pillar>
          <Pillar>Excelência como filosofia</Pillar>
          <Pillar>Agilidade & Precisão.</Pillar>
        </div>
        <p className="bg-foreground-accent text-secondary text-center font-normal pb-2">
          COMO PARCEIROS, TRANSFORMANDO COM FOCO NO VALOR AGREGADO.
        </p>
      </div>
    </PageSection>
  )
}

export default WordviewPillars
