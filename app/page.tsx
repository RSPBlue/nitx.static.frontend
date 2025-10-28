import Banner from "@/components/Banner"
import Competences from "@/components/Competences"
import Deliver from "@/components/Deliver"
import Ecosystem from "@/components/Ecosystem"
import IdealizationDiagram from "@/components/IdealizationDiagram"
import MarketAndServicesMain from "@/components/MarketAndServices"
import MarketAndServicesDetailsInner from "@/components/MarketAndServicesDetailsInner"
import MarketAndServicesDetailsOuter from "@/components/MarketAndServicesDetailsOuter"
import OurHistory from "@/components/OurHistory"
import PartnersMarquee from "@/components/PartnersMarquee"
import WordviewPillars from "@/components/WordviewPillars"
import Navbar from "@/Layout/Navbar"

export default function Home() {
  return (
    <div className="relative font-unbounded flex flex-col overflow-y-auto font-light">
      <Navbar />
      <Banner />
      <OurHistory />
      <IdealizationDiagram />
      <div>
        <PartnersMarquee />
        <div className="pb-30">
          <Competences />
        </div>
        <div className="flex flex-col">
          <div className="bg-brand-dark">
            <MarketAndServicesMain />
            <MarketAndServicesDetailsInner />
          </div>
          <div className="bg-brand-gradient-reverse py-20 flex flex-col gap-40">
            <MarketAndServicesDetailsOuter />
            <WordviewPillars />
            <Deliver />
          </div>
        </div>
      </div>
      <Ecosystem />
    </div>
  )
}
