"use client"

import IdealizationDiagramImage from "@/public/nitx-idealization-diagram.png"
import Image from "next/image"
import { ArcherContainer, ArcherElement } from "react-archer"
import { getRelations } from "./configs"
import PageSection from "../PageSection"
import Title from "@/Layout/Title"

const IdealizationDiagram = () => {
  return (
    <PageSection id="idealization">
      <Title>
        NOSSA <strong>IDEALIZAÇÃO</strong>
      </Title>
      <p className="border-2 border-brand rounded-xl text-sm p-4">
        Silicon Village, Investtools e Newtech criam a joint venture que origina
        a novaITX, com o intuito de ampliar o escopo de atendimento e ter uma
        empresa que ofereça uma nova experiência em tecnologia e pessoas,
        atendendo de forma integrada e especializada.
      </p>
      <ArcherContainer lineStyle="straight" className="w-full">
        <div className="flex w-full h-[500px] px-20">
          <div className="flex-1 flex text-[36px] justify-around flex-col-reverse h-full gap-4 font-oswald font-extrabold text-brand">
            {/* LEFT-3 */}
            <div className="flex flex-col">
              <ArcherElement
                id="info-left-3"
                relations={getRelations("left", 3)}
              >
                <div className="w-fit text-end pl-20 pr-4">+400MIL*</div>
              </ArcherElement>
              <span className="font-unbounded text-xs font-light text-foreground w-1/2 pl-24">
                Horas Trabalhadas
              </span>
            </div>
            {/* LEFT-2 */}
            <div className="flex flex-col">
              <ArcherElement
                id="info-left-2"
                relations={getRelations("left", 2)}
              >
                <div className="w-fit text-center pl-10 pr-4">+120</div>
              </ArcherElement>
              <span className="font-unbounded text-xs font-light text-foreground w-1/2 pl-14">
                Projetos Concluídos
              </span>
            </div>
            {/* LEFT-1 */}
            <div className="flex flex-col">
              <ArcherElement
                id="info-left-1"
                relations={getRelations("left", 1)}
              >
                <div className=" relative w-fit pr-4">+30</div>
              </ArcherElement>
              <span className="font-unbounded text-xs font-light text-foreground w-1/2 pl-4">
                Empresas transformadas
              </span>
            </div>
            <div className="h-1/5 w-10" />
          </div>
          <div className="relative w-3xl h-full flex items-center justify-center">
            {/* CONEXÃO LEFT 1 */}
            <ArcherElement id="center-left-1">
              <div className="absolute top-1/2 left-28 w-2 h-2" />
            </ArcherElement>
            {/* CONEXÃO LEFT 2 */}
            <ArcherElement id="center-left-2">
              <div className="absolute top-3/5 left-27 w-2 h-2" />
            </ArcherElement>
            {/* CONEXÃO LEFT 3 */}
            <ArcherElement id="center-left-3">
              <div className="absolute top-[73%] left-36 w-2 h-2" />
            </ArcherElement>

            <Image
              src={IdealizationDiagramImage}
              alt="Diagrama de Idealização"
              className="h-full object-contain"
            />

            {/* CONEXÃO RIGHT 1 */}
            <ArcherElement id="center-right-1">
              <div className="absolute top-[37%] right-40 w-2 h-2" />
            </ArcherElement>
            {/* CONEXÃO RIGHT 2 */}
            <ArcherElement id="center-right-2">
              <div className="absolute top-[45%] right-30 w-2 h-2" />
            </ArcherElement>
            {/* CONEXÃO RIGHT 3 */}
            <ArcherElement id="center-right-3">
              <div className="absolute top-3/5 right-27 w-2 h-2" />
            </ArcherElement>
          </div>
          <div className="flex-1 flex text-[36px] justify-around flex-col items-end h-full gap-4 font-oswald font-extrabold text-brand">
            {/* RIGHT-1 */}
            <div className="flex flex-col">
              <ArcherElement
                id="info-right-1"
                relations={getRelations("right", 1)}
              >
                <div className="w-fit pr-30 pl-4">950</div>
              </ArcherElement>
              <span className="font-unbounded text-xs font-light text-foreground w-full pl-4">
                Fundos processados diariamente
              </span>
            </div>

            {/* RIGHT-2 */}
            <div className="flex flex-col">
              <ArcherElement
                id="info-right-2"
                relations={getRelations("right", 2)}
              >
                <div className="w-fit text-center pl-4 pr-20">50</div>
              </ArcherElement>
              <span className="font-unbounded text-xs font-light text-foreground w-full pl-4">
                Gestoras administradas
              </span>
            </div>
            {/* RIGHT-3 */}
            <div className="flex flex-col">
              <ArcherElement
                id="info-right-3"
                relations={getRelations("right", 3)}
              >
                <div className="w-fit text-center pl-4 pr-20">180Bi</div>
              </ArcherElement>
              <span className="font-unbounded text-xs font-light text-foreground w-full pl-6">
                Em Participação
              </span>
            </div>
            <div className="h-1/5 w-10" />
          </div>
        </div>
      </ArcherContainer>
    </PageSection>
  )
}

export default IdealizationDiagram
