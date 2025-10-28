"use client"

import NitxIcon from "@/icons/NitxIcon"
import { ArcherContainer, ArcherElement } from "react-archer"
import PageSection from "../PageSection"
import { mappedArcherRelations } from "./configs"
import Title from "@/Layout/Title"

const Ecosystem = () => {
  return (
    <PageSection id="ecosystem">
      <Title className="tracking-widest">ECOSSISTEMA</Title>
      <ArcherContainer className="w-full pb-30">
        <div className="flex w-full">
          <div className="w-1/5 flex flex-col justify-between text-end text-lg pr-24">
            <ArcherElement
              id="left-content-1"
              relations={mappedArcherRelations.get("left")}
            >
              <p className="font-oswald pr-2">
                FERRAMENTAS AVANÇADAS EM FINANÇAS
              </p>
            </ArcherElement>
            <ArcherElement
              id="left-content-2"
              relations={mappedArcherRelations.get("left")}
            >
              <p className="font-oswald pr-2">EXPERTS FINANCEIROS</p>
            </ArcherElement>
            <ArcherElement
              id="left-content-3"
              relations={mappedArcherRelations.get("left")}
            >
              <p className="font-oswald pr-2">DESENVOLVEDORES ESPECIALIZADOS</p>
            </ArcherElement>
            <ArcherElement
              id="left-content-4"
              relations={mappedArcherRelations.get("left")}
            >
              <p className="font-oswald pr-2">
                EXPERIÊNCIA E CERTIFICAÇÕES ELEVADAS
              </p>
            </ArcherElement>
          </div>
          <div className="flex flex-1 flex-col gap-28 justify-around">
            <ArcherElement
              id="top-content-1"
              relations={mappedArcherRelations.get("top")}
            >
              <p className="font-oswald text-center text-lg">CYBERSECURITY</p>
            </ArcherElement>
            <div className="flex justify-between gap-10 text-lg w-full">
              <ArcherElement
                id="center-content-1"
                relations={mappedArcherRelations.get("center")}
              >
                <p className="py-4 px-8 rounded-full w-full flex justify-center text-center items-center text-background bg-brand">
                  Invest Tools
                </p>
              </ArcherElement>
              <ArcherElement
                id="center-content-2"
                relations={mappedArcherRelations.get("center")}
              >
                <p className="py-4 px-8 rounded-full w-full flex justify-center text-center items-center text-background bg-brand">
                  Nutech
                </p>
              </ArcherElement>
              <ArcherElement
                id="center-content-3"
                relations={mappedArcherRelations.get("center")}
              >
                <p className="py-4 px-8 rounded-full w-full flex justify-center text-center items-center text-background bg-brand">
                  Silicon Village
                </p>
              </ArcherElement>
            </div>
            <ArcherElement id="bottom-content-1">
              <figure className="w-full flex justify-center pt-2">
                <NitxIcon color="#002ccc" width={200} height={50} />
              </figure>
            </ArcherElement>
          </div>
          <div className="w-1/5 flex flex-col justify-between text-lg pl-24">
            <ArcherElement
              id="right-content-1"
              relations={mappedArcherRelations.get("right")}
            >
              <p className="font-oswald pl-2">PARCERIAS E CERTIFICAÇÕES</p>
            </ArcherElement>
            <ArcherElement
              id="right-content-2"
              relations={mappedArcherRelations.get("right")}
            >
              <p className="font-oswald pl-2">CASES SÓLIDOS</p>
            </ArcherElement>
            <ArcherElement
              id="right-content-3"
              relations={mappedArcherRelations.get("right")}
            >
              <p className="font-oswald pl-2">+120 COLABORADORES</p>
            </ArcherElement>
            <ArcherElement
              id="right-content-4"
              relations={mappedArcherRelations.get("right")}
            >
              <p className="font-oswald pl-2">INFRAESTRUTURA</p>
            </ArcherElement>
          </div>
        </div>
      </ArcherContainer>
    </PageSection>
  )
}

export default Ecosystem
