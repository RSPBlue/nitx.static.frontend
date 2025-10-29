import NitxLogo from "@/public/nitx-logo.png"
import NitxMarketServiceDiagram from "@/public/nitx-market-services.png"
import Image from "next/image"
import PageSection from "../PageSection"

const MarketAndServicesMain = () => {
  return (
    <PageSection>
      <div
        id="market"
        className="flex flex-col items-center justify-around py-20 xl:flex-row gap-28"
      >
        <div className="flex items-center gap-10 flex-col xl:w-2/5 max-w-md">
          <h2 className="font-oswald italic text-center text-5xl text-background xl:w-2/3 xl:text-start xl:text-7xl">
            Mercados e Serviços
          </h2>
          <p className="text-sm bg-background text-brand text-justify p-2 w-2/3">
            O nosso esquema de integração representa, de forma visual, nosso
            leque de possibilidades e abrangência.
          </p>
        </div>
        <figure className="relative flex justify-center items-center w-xs sm:w-sm md:w-xl overflow-hidden">
          <Image
            src={NitxMarketServiceDiagram}
            width={1000}
            height={1000}
            alt="NovaNITX Logomarca"
            className="animate-spin-slow h-full aspect-square"
          />
          <div className="bg-secondary h-28 sm:h-36 md:h-56 aspect-square rounded-full inset-1/2 absolute -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <Image src={NitxLogo} alt="NITX Logo" />
          </div>
        </figure>
      </div>
    </PageSection>
  )
}

export default MarketAndServicesMain
