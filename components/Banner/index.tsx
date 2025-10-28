import NitxLogo from "@/public/nitx-logo.png"
import Image from "next/image"

const Banner = () => {
  return (
    <header className="banner relative flex h-screen p-10">
      <figure className="w-1/2">
        <Image src={NitxLogo} alt="Logomarca" />
      </figure>
      <div className="font-oswald text-brand flex h-full w-1/2 flex-col items-center justify-center text-lg font-bold">
        <p className="text-[3.2vw]">ESTAMOS EM UMA</p>
        <p className="text-[5.4vw] underline">NOVA ERA.</p>
      </div>
    </header>
  )
}

export default Banner
