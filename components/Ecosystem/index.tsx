"use client"

import NitxIcon from "@/icons/NitxIcon"
import labels from "@/labels"
import Title from "@/Layout/Title"
import { ArrowBigDown, EllipsisVertical } from "lucide-react"
import { ArcherContainer, ArcherElement } from "react-archer"
import { Fragment } from "react/jsx-runtime"
import PageSection from "../PageSection"
import { mappedArcherRelations } from "./configs"
import EcosystemMobileCard from "./MobileCard"
import { IEcosystemCardPositions } from "./types"

const Ecosystem = () => {
  const { links, ecosystem } = labels

  const { leftCard, topCard, rightCard } =
    ecosystem.cards.reduce<IEcosystemCardPositions>(
      (positions, card) => {
        const positionKey = `${card.side}Card` as keyof IEcosystemCardPositions
        positions[positionKey] = card
        return positions
      },
      {
        leftCard: null,
        topCard: null,
        rightCard: null,
      },
    )

  return (
    <PageSection id={links.ecosystem}>
      <Title className="tracking-widest">{ecosystem.title}</Title>
      <div className="flex flex-col items-center gap-4 w-full lg:hidden">
        {ecosystem.cards
          .sort((curr, comp) => curr.mobileOrder - comp.mobileOrder)
          .map(({ title, items, mobileOrder }, index, arr) => (
            <Fragment key={mobileOrder}>
              <EcosystemMobileCard title={title} list={items} />
              {index < arr.length - 1 && (
                <EllipsisVertical
                  size={64}
                  className="text-secondary text-center"
                />
              )}
            </Fragment>
          ))}
        <ArrowBigDown size={64} className="text-secondary text-center" />
        <figure className="w-full flex justify-center pb-20">
          <NitxIcon color="#002ccc" width={400} height={100} />
        </figure>
      </div>
      <ArcherContainer className="w-full pb-30 hidden lg:block">
        <div className="flex w-full">
          <div className="w-1/5 flex flex-col justify-between text-end text-lg pr-24">
            {leftCard?.items.map((item, index) => (
              <ArcherElement
                key={item}
                id={`left-content-${index}`}
                relations={mappedArcherRelations.get("left")}
              >
                <p className="font-oswald pr-2">{item}</p>
              </ArcherElement>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-28 justify-around">
            <div className="flex justify-around">
              {topCard?.items.map((item, index) => (
                <ArcherElement
                  key={item}
                  id={`top-content-${index}`}
                  relations={mappedArcherRelations.get("top")}
                >
                  <p className="font-oswald text-center text-lg">{item}</p>
                </ArcherElement>
              ))}
            </div>
            <div className="flex justify-between gap-10 text-lg w-full">
              <ArcherElement
                id="center-content-1"
                relations={mappedArcherRelations.get("center")}
              >
                <p className="py-4 px-8 rounded-full w-full flex justify-center text-center items-center text-background bg-brand">
                  {leftCard?.title}
                </p>
              </ArcherElement>
              <ArcherElement
                id="center-content-2"
                relations={mappedArcherRelations.get("center")}
              >
                <p className="py-4 px-8 rounded-full w-full flex justify-center text-center items-center text-background bg-brand">
                  {topCard?.title}
                </p>
              </ArcherElement>
              <ArcherElement
                id="center-content-3"
                relations={mappedArcherRelations.get("center")}
              >
                <p className="py-4 px-8 rounded-full w-full flex justify-center text-center items-center text-background bg-brand">
                  {rightCard?.title}
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
            {rightCard?.items.map((item, index) => (
              <ArcherElement
                key={item}
                id={`right-content-${index}`}
                relations={mappedArcherRelations.get("right")}
              >
                <p className="font-oswald pl-2">{item}</p>
              </ArcherElement>
            ))}
          </div>
        </div>
      </ArcherContainer>
    </PageSection>
  )
}

export default Ecosystem
