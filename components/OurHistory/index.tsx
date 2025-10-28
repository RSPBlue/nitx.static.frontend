import PageSection from "../PageSection"
import OurHistoryCard from "./OurHistoryCard"

const OurHistory = () => {
  return (
    <PageSection>
      <section className="flex flex-col items-center overflow-x-auto">
        <div className="flex max-w-[1240px] flex-col items-center gap-8">
          <h2 className="font-oswald text-center text-[64px] font-normal">
            NOSSA <span className="text-brand font-bold">HISTÓRIA</span>
          </h2>
          <div className="flex w-full gap-2">
            <OurHistoryCard title="+DE 120">Colaboradores</OurHistoryCard>
            <OurHistoryCard title="+20">
              Anos de atuação no Mercado
            </OurHistoryCard>
            <OurHistoryCard title="+DE 100">
              desenvolvedores especializados
            </OurHistoryCard>
            <OurHistoryCard title="+DE 25">
              especialistas em gestão de investimentos
            </OurHistoryCard>
          </div>
          <p>
            A união das “marcas originais” desta Joint Venture, cria uma
            organização poderosa, com mais de 20 anos de experiência, liderança
            e inovação no mercado de tecnologia, somando o poder de fogo de mais
            de mais 120 colaboradores, mais de 100 desenvolvedores
            especializados e mais de 25 especialistas em gestão de
            investimentos.
          </p>
        </div>
      </section>
    </PageSection>
  )
}

export default OurHistory
