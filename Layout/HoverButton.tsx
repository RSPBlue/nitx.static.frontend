"use client"

import classNames from "classnames"
import { ReactNode } from "react"

type HoverButtonProps = {
  icon: ReactNode
  text: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  iconClassName?: string
  textClassName?: string
  htmlType?: "button" | "submit" | "reset"
  dataTest?: string
  size?: "sm" | "md" | "lg"
}

const HoverButton = ({
  icon,
  text,
  onClick,
  disabled = false,
  className,
  iconClassName,
  textClassName,
  htmlType = "button",
  dataTest,
  size = "sm",
}: HoverButtonProps) => {
  const sizeValue = size === "sm" ? 32 : size === "md" ? 40 : 48

  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  }

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <button
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
      data-test={dataTest}
      className={classNames(
        "cursor-pointer relative group flex items-center justify-center transition-all duration-300 ease-in-out",
        "overflow-hidden",
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      style={{
        width: `${sizeValue}px`,
        height: `${sizeValue}px`,
        borderRadius: "50%",
        transition: "width 0.3s ease-in-out, border-radius 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        const button = e.currentTarget
        const textWidth =
          text.length * (size === "sm" ? 8 : size === "md" ? 7 : 8) + 24
        const newWidth = Math.max(
          textWidth,
          size === "sm" ? 40 : size === "md" ? 48 : 54,
        )

        button.style.width = `${newWidth}px`
        button.style.borderRadius = "24px"
      }}
      onMouseLeave={(e) => {
        const button = e.currentTarget
        button.style.width = `${sizeValue}px`
        button.style.borderRadius = "50%"
      }}
    >
      <div
        className={classNames(
          "flex items-center justify-center transition-all duration-300",
          "group-hover:opacity-0 group-hover:scale-75",
          iconClassName,
        )}
        style={{
          width: `${sizeValue}px`,
          height: `${sizeValue}px`,
        }}
      >
        {icon}
      </div>

      <div
        className={classNames(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          "opacity-0 group-hover:opacity-100",
          "transform scale-75 group-hover:scale-100",
          textSizeClasses[size],
          "font-medium whitespace-nowrap px-4",
          textClassName,
        )}
        style={{
          color: undefined,
        }}
      >
        {text}
      </div>
    </button>
  )
}

export default HoverButton
