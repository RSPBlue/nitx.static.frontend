import Image from "next/image"
import NovaNITXLogo from "@/public/novaitx-white.png"
import NitxMarketServiceDiagram from "@/public/nitx-market-services.png"
import NitxLogo from "@/public/nitx-logo.png"

const MarketAndServicesMain = () => {
  return (
    <section className="relative flex items-center justify-around py-20">
      <div className="flex items-center flex-col gap-10 w-1/5">
        <h2 className="flex flex-col gap-4 font-oswald italic text-7xl text-background">
          <span>Mercados e</span>
          <span>Serviços</span>
        </h2>
        <p className="text-sm bg-background text-brand text-justify p-2">
          O nosso esquema de integração representa, de forma visual, nosso leque
          de possibilidades e abrangência.
        </p>
      </div>
      <figure className="relative flex justify-center items-center w-xl overflow-hidden">
        <Image
          src={NitxMarketServiceDiagram}
          width={1000}
          height={1000}
          alt="NovaNITX Logomarca"
          className="animate-spin-slow h-full aspect-square"
        />
        <div className="bg-secondary h-56 aspect-square rounded-full inset-1/2 absolute -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <Image src={NitxLogo} alt="NITX Logo" />
        </div>
      </figure>
    </section>
  )
}

export default MarketAndServicesMain
