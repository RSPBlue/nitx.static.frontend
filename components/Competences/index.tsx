"use client"

import labels from "@/labels"
import PageSection from "../PageSection"
import CompetenciesCard from "./Card"
import classNames from "classnames"

const Competencies = () => {
  const { competencies } = labels

  return (
    <PageSection>
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="xl:flex-1 flex flex-col gap-8">
          <div className="w-full p-4 bg-tertiary text-secondary rounded-b-4xl font-oswald flex justify-end items-end">
            <h2 className="text-[41px] text-end">
              {competencies.thinTitle} <strong>{competencies.boldTitle}</strong>
            </h2>
          </div>
          <CompetenciesCard
            title={competencies.softwareEngineeringCard.title}
            className="h-full"
            titleClassName="text-center xl:text-start"
          >
            <div className="flex text-center flex-col gap-4">
              {competencies.softwareEngineeringCard.contents.map(
                (content, contentIndex) => (
                  <p key={contentIndex}>{content}</p>
                ),
              )}
            </div>
          </CompetenciesCard>
        </div>
        <div className="xl:w-3/4 grid grid-cols-12 gap-4">
          {competencies.baseCards.map(
            ({ title, includeMargin, contents }, cardIndex) => (
              <CompetenciesCard
                key={cardIndex}
                title={title}
                className={classNames(
                  "col-span-full sm:col-span-6 xl:col-span-4",
                  { "mt-4": includeMargin },
                )}
              >
                <div className="flex flex-col gap-4">
                  {contents.map((content, contentIndex) => (
                    <p key={contentIndex}>{content}</p>
                  ))}
                </div>
              </CompetenciesCard>
            ),
          )}
          <CompetenciesCard
            title={competencies.performanceCulture.title}
            className="col-span-full xl:col-span-9"
          >
            <div className="flex flex-col gap-4">
              {competencies.performanceCulture.contents.map(
                (content, contentIndex) => (
                  <p key={contentIndex}>{content}</p>
                ),
              )}
            </div>
          </CompetenciesCard>
        </div>
      </div>
    </PageSection>
  )
}

export default Competencies
