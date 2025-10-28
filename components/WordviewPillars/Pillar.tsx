import { IComponentWithChildren } from "@/types"
import WreathLeft from "@/public/wreath-left.png"
import WreathRight from "@/public/wreath-right.png"
import PillarImage from "@/public/pillar.svg"
import Image from "next/image"

const Pillar = (props: IComponentWithChildren) => {
  const { children } = props
  return (
    <div className="flex-1 flex flex-col text-xl text-background font-semibold items-center">
      <header className="relative flex justify-center w-fit h-40 px-14">
        <figure className="absolute top-0 left-0 h-full w-1/2">
          <Image
            src={WreathLeft}
            alt="Folha de louro circular apontada para a esquerda."
            className="h-full object-contain w-full"
          />
        </figure>
        <p className="w-46 text-center flex items-center px-3">{children}</p>
        <figure className="absolute top-0 right-0 h-full w-1/2">
          <Image
            src={WreathRight}
            alt="Folha de louro circular apontada para a direita."
            className="h-full object-contain w-full"
          />
        </figure>
      </header>
      <footer className="flex justify-center bg-">
        <Image
          src={PillarImage}
          alt="Folha de louro circular apontada para a esquerda."
          className="object-contain w-32"
        />
      </footer>
    </div>
  )
}

export default Pillar
