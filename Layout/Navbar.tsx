"use client"

import NitxIcon from "@/icons/NitxIcon"
import labels from "@/labels"
import classNames from "classnames"
import {
  BookOpen,
  ChartColumnBig,
  Crown,
  Landmark,
  Lightbulb,
  MonitorCog,
  Phone,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import HoverButton from "./HoverButton"

const Navbar = (props: { className?: string }) => {
  const { className } = props
  const { navbar, links } = labels

  const [padding, setPadding] = useState("py-12 px-12")
  const [color, setColor] = useState("bg-transparent")

  const mailToHref = useMemo(() => {
    const subject = encodeURIComponent(navbar.emailSubject)
    const body = encodeURIComponent(navbar.emailBody)

    return `mailto:${navbar.mailTo}?subject=${subject}&body=${body}`
  }, [])

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setColor("bg-brand")
      setPadding("py-4 px-10 lg:py-8 lg:px-20")
    } else {
      setColor("bg-transparent")
      setPadding("py-6 px-6 lg:py-12 lg:px-12")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <nav
      className={classNames(
        "fixed top-0 z-40 gap-20 w-full h-fit flex justify-between items-center transition-all duration-1000",
        color,
        padding,
        className,
      )}
    >
      <figure>
        <Link href="#top">
          <NitxIcon
            width={96}
            height={20}
            className={classNames("transition-colors duration-300 delay-150", {
              "text-brand-dark xl:text-white": color === "bg-transparent",
              "text-white": color === "bg-brand",
            })}
          />
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
            "hidden lg:block px-2 rounded-full transition-colors duration-300",
          )}
        >
          <Link href={`#${links.history}`}>
            <HoverButton
              text={navbar.history}
              icon={<BookOpen width={24} />}
              className={classNames({
                "bg-white hover:bg-white": color === "bg-transparent",
                "bg-brand hover:bg-brand": color !== "bg-transparent",
              })}
              iconClassName={classNames({
                "text-brand hover:text-white": color === "bg-transparent",
                "text-white hover:text-brand": color !== "bg-transparent",
              })}
            />
          </Link>
        </li>
        <li
          className={classNames(
            "hidden lg:block px-2 rounded-full transition-colors duration-300",
          )}
        >
          <Link href={`#${links.idealization}`}>
            <HoverButton
              text={navbar.idealization}
              icon={<Lightbulb width={24} />}
              className={classNames({
                "bg-white hover:bg-white": color === "bg-transparent",
                "bg-brand hover:bg-brand": color !== "bg-transparent",
              })}
              iconClassName={classNames({
                "text-brand hover:text-white": color === "bg-transparent",
                "text-white hover:text-brand": color !== "bg-transparent",
              })}
            />
          </Link>
        </li>
        <li
          className={classNames(
            "hidden lg:block px-2 rounded-full transition-colors duration-300",
          )}
        >
          <Link href={`#${links.competencies}`}>
            <HoverButton
              text={navbar.competencies}
              icon={<Crown width={24} />}
              className={classNames({
                "bg-white hover:bg-white": color === "bg-transparent",
                "bg-brand hover:bg-brand": color !== "bg-transparent",
              })}
              iconClassName={classNames({
                "text-brand hover:text-white": color === "bg-transparent",
                "text-white hover:text-brand": color !== "bg-transparent",
              })}
            />
          </Link>
        </li>
        <li
          className={classNames(
            "hidden lg:block px-2 rounded-full transition-colors duration-300",
          )}
        >
          <Link href={`#${links.marketAndServices}`}>
            <HoverButton
              text={navbar.marketAndServices}
              icon={<ChartColumnBig width={24} />}
              className={classNames({
                "bg-white hover:bg-white": color === "bg-transparent",
                "bg-brand hover:bg-brand": color !== "bg-transparent",
              })}
              iconClassName={classNames({
                "text-brand hover:text-white": color === "bg-transparent",
                "text-white hover:text-brand": color !== "bg-transparent",
              })}
            />
          </Link>
        </li>
        <li
          className={classNames(
            "hidden lg:block px-2 rounded-full transition-colors duration-300",
          )}
        >
          <Link href={`#${links.pillars}`}>
            <HoverButton
              text={navbar.pillars}
              icon={<Landmark width={24} />}
              className={classNames({
                "bg-white hover:bg-white": color === "bg-transparent",
                "bg-brand hover:bg-brand": color !== "bg-transparent",
              })}
              iconClassName={classNames({
                "text-brand hover:text-white": color === "bg-transparent",
                "text-white hover:text-brand": color !== "bg-transparent",
              })}
            />
          </Link>
        </li>
        <li
          className={classNames(
            "hidden lg:block px-2 rounded-full transition-colors duration-300",
          )}
        >
          <Link href={`#${links.deliver}`}>
            <HoverButton
              text={navbar.deliver}
              icon={<Zap width={24} />}
              className={classNames({
                "bg-white hover:bg-white": color === "bg-transparent",
                "bg-brand hover:bg-brand": color !== "bg-transparent",
              })}
              iconClassName={classNames({
                "text-brand hover:text-white": color === "bg-transparent",
                "text-white hover:text-brand": color !== "bg-transparent",
              })}
            />
          </Link>
        </li>
        <li
          className={classNames(
            "hidden lg:block px-2 rounded-full transition-colors duration-300",
          )}
        >
          <Link href={`#${links.ecosystem}`}>
            <HoverButton
              text={navbar.ecosystem}
              icon={<MonitorCog width={24} />}
              className={classNames({
                "bg-white hover:bg-white": color === "bg-transparent",
                "bg-brand hover:bg-brand": color !== "bg-transparent",
              })}
              iconClassName={classNames({
                "text-brand hover:text-white": color === "bg-transparent",
                "text-white hover:text-brand": color !== "bg-transparent",
              })}
            />
          </Link>
        </li>

        <li
          className={classNames(
            "hidden lg:block px-2 rounded-full transition-colors duration-300",
          )}
        >
          <Link href={mailToHref}>
            <HoverButton
              text={navbar.contact}
              icon={<Phone width={24} />}
              className={classNames({
                "bg-white hover:bg-white": color === "bg-transparent",
                "bg-brand hover:bg-brand": color !== "bg-transparent",
              })}
              iconClassName={classNames({
                "text-brand hover:text-white": color === "bg-transparent",
                "text-white hover:text-brand": color !== "bg-transparent",
              })}
            />
          </Link>
        </li>
        <li
          className={classNames(
            "lg:hidden px-2 rounded-full transition-colors duration-300",
            {
              "text-brand-dark": color === "bg-transparent",
              "text-background": color === "bg-brand",
            },
          )}
        >
          <Link href={mailToHref} className="flex gap-2 items-center">
            <Phone width={24} />
            <span>{navbar.contact}</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
