"use client"

import NitxIcon from "@/icons/NitxIcon"
import NitxLogo from "@/public/nitx-logo.png"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

const Navbar = (props: { className?: string }) => {
  const { className } = props

  const [padding, setPadding] = useState("py-12 px-12")
  const [color, setColor] = useState("bg-transparent")

  const mailToHref = useMemo(() => {
    const subject = encodeURIComponent("Título do email")
    const body = encodeURIComponent("Conteúdo do email")

    return `mailto:nitx.exemplo@dominio.com?subject=${subject}&body=${body}`
  }, [])

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setColor("bg-brand")
      setPadding("p-8 px-20")
    } else {
      setColor("bg-transparent")
      setPadding("py-12 px-12")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <nav
      className={classNames(
        "fixed top-0 z-50 gap-20 w-full flex justify-between items-center transition-all duration-1000",
        color,
        padding,
        className,
      )}
    >
      <figure>
        <Link href="#top">
          <NitxIcon color="#f1f3f5" height={20} />
        </Link>
      </figure>
      <ul
        className={classNames(
          "list-none inline-flex max-h-4/5 flex-wrap text-xs items-center gap-8 transition-colors duration-300 delay-150",
          {
            "text-brand": color === "bg-transparent",
            "text-background": color === "bg-brand",
          },
        )}
      >
        <li
          className={classNames(
            "px-2 rounded-full transition-colors duration-300",
            {
              "bg-white hover:bg-brand hover:text-white":
                color === "bg-transparent",
              "bg-transparent hover:bg-white hover:text-brand":
                color !== "bg-transparent",
            },
          )}
        >
          <Link href="#history">História</Link>
        </li>
        <li
          className={classNames(
            "px-2 rounded-full transition-colors duration-300",
            {
              "bg-white hover:bg-brand hover:text-white":
                color === "bg-transparent",
              "bg-transparent hover:bg-white hover:text-brand":
                color !== "bg-transparent",
            },
          )}
        >
          <Link href="#idealization">Idealização</Link>
        </li>
        <li
          className={classNames(
            "px-2 rounded-full transition-colors duration-300",
            {
              "bg-white hover:bg-brand hover:text-white":
                color === "bg-transparent",
              "bg-transparent hover:bg-white hover:text-brand":
                color !== "bg-transparent",
            },
          )}
        >
          <Link href="#competencies">Competências</Link>
        </li>
        <li
          className={classNames(
            "px-2 rounded-full transition-colors duration-300",
            {
              "bg-white hover:bg-brand hover:text-white":
                color === "bg-transparent",
              "bg-transparent hover:bg-white hover:text-brand":
                color !== "bg-transparent",
            },
          )}
        >
          <Link href="#market">Mercados e Serviços</Link>
        </li>
        <li
          className={classNames(
            "px-2 rounded-full transition-colors duration-300",
            {
              "bg-white hover:bg-brand hover:text-white":
                color === "bg-transparent",
              "bg-transparent hover:bg-white hover:text-brand":
                color !== "bg-transparent",
            },
          )}
        >
          <Link href="#pillars">Pilares</Link>
        </li>
        <li
          className={classNames(
            "px-2 rounded-full transition-colors duration-300",
            {
              "bg-white hover:bg-brand hover:text-white":
                color === "bg-transparent",
              "bg-transparent hover:bg-white hover:text-brand":
                color !== "bg-transparent",
            },
          )}
        >
          <Link href="#ecosystem">Ecossistema</Link>
        </li>
        <li
          className={classNames(
            "px-2 rounded-full transition-colors duration-300",
            {
              "bg-white hover:bg-brand hover:text-white":
                color === "bg-transparent",
              "bg-transparent hover:bg-white hover:text-brand":
                color !== "bg-transparent",
            },
          )}
        >
          <Link href={mailToHref}>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
