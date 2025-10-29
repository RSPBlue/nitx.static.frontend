"use client"

import Image from "next/image"
import NitxBuilding from "@/public/nitx-build.png"
import PageSection from "../PageSection"
import CardDeliver from "./Card"
import AsteriskIcon from "@/public/asterisk.svg"
import { ArcherContainer, ArcherElement } from "react-archer"
import Title from "@/Layout/Title"
import labels from "@/labels"

const Deliver = () => {
  const { links, deliver } = labels
  return (
    <PageSection id={links.deliver}>
      <Title color="white">
        COMO <strong>ENTREGAMOS</strong>
      </Title>
      <div className="flex justify-center lg:justify-between">
        <ArcherContainer className="w-fit">
          <div className="flex justify-center lg:justify-between">
            <div className="lg:flex-1 w-full sm:w-2/3 flex flex-col gap-10 justify-center h-full">
              {deliver.cards.map(({ content, archerConnection }, index) => (
                <CardDeliver
                  key={index}
                  {...(archerConnection && {
                    archerId: "stroke-connector-start",
                  })}
                >
                  {content}
                </CardDeliver>
              ))}

              <div className="flex gap-4 text-xl font-medium mt-10 w-2/3">
                <ArcherElement
                  id="stroke-connector-end"
                  relations={[
                    {
                      targetId: `stroke-connector-start`,
                      targetAnchor: "middle",
                      sourceAnchor: "top",
                      style: {
                        strokeColor: "#f1f3f5",
                        endMarker: false,
                        strokeWidth: 2,
                      },
                    },
                  ]}
                >
                  <div>
                    <Image
                      src={AsteriskIcon}
                      alt="Seta apontada para a diagonal superior direita"
                      className="w-8 aspect-square"
                    />
                  </div>
                </ArcherElement>
                <p className="px-1 w-1/3 text-background flex-1">
                  {deliver.subtitle}
                </p>
              </div>
            </div>
          </div>
        </ArcherContainer>
        <figure className="hidden relative flex-1 justify-center min-w-[420px] lg:flex">
          <Image src={NitxBuilding} alt="Prédio NITX" className="z-10" />
          <div className="absolute w-[420px] rounded-xl shadow-2xl -translate-y-[5%] bg-white h-9/10 top-[10%] z-0" />
        </figure>
      </div>
    </PageSection>
  )
}

export default Deliver
