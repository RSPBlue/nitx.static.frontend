import AwsPartnerLogo from "@/public/aws-partner.png"
import LicelLogo from "@/public/licel-partner.png"
import Image from "next/image"
import PageSection from "../PageSection"

const Partnerships = () => {
  return (
    <PageSection>
      <div className="flex flex-col w-full gap-32">
        <h2 className="bg-secondary-fade w-full px-12 pt-8 pb-4 text-tertiary font-oswald text-[41px] rounded-b-4xl flex flex-col">
          <span>NOSSAS</span>
          <strong>PARCERIAS</strong>
        </h2>
      </div>
      <div className="flex gap-20 px-20 justify-around">
        <div className="flex gap-4 w-1/3">
          <figure className="h-full justify-center">
            <Image
              src={AwsPartnerLogo}
              alt="Logomarca parceria"
              className="w-80 aspect-square object-contain"
            />
          </figure>
          <div className="flex flex-col gap-4 text-xs h-full justify-center">
            <p>PARCERIA DE LONGA DATA.</p>
            <p>SOMOS AWS PARTNERS, ESPECIALIZADOS NAS SOLUÇÕES EM NUVEM.</p>
          </div>
        </div>
        <div className="flex gap-4 w-1/3">
          <figure className="h-full justify-center">
            <Image
              src={LicelLogo}
              alt="Logomarca parceria"
              className="w-[600px] aspect-square object-contain"
            />
          </figure>
          <div className="flex flex-col gap-4 text-xs h-full justify-center">
            <p>
              PARCEIROS DE SEGURANÇA DIGITAL PARA APLICAÇÕES, CONTRA QUALQUER
              TIPO DE ATAQUE OU FALHA.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  )
}

export default Partnerships
