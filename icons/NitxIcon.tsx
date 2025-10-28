interface Props {
  size?: number
  width?: number
  height?: number
  color?: string
}

const NitxIcon = (props: Props) => {
  const { size, width, height, color } = props

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size ?? 135}
      height={height ?? size ?? 135}
      viewBox="0 0 135 28"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0,28) scale(0.1,-0.1)" fill={color} stroke="none">
        <path
          d="M25 255 c-24 -23 -25 -31 -25 -135 l0 -110 35 0 34 0 3 96 3 96 107
-101 c59 -55 116 -101 127 -101 10 0 29 9 42 19 22 18 24 27 27 135 l4 116
-36 0 -36 0 0 -95 c0 -52 -3 -95 -7 -95 -4 0 -53 45 -108 100 -110 108 -129
117 -170 75z"
        />
        <path d="M410 140 l0 -130 35 0 35 0 0 130 0 130 -35 0 -35 0 0 -130z" />
        <path
          d="M502 238 l3 -33 73 -3 72 -3 0 -94 0 -95 35 0 35 0 0 95 0 95 75 0
75 0 0 35 0 35 -186 0 -185 0 3 -32z"
        />
        <path
          d="M959 206 l82 -64 -73 -58 c-40 -31 -77 -61 -82 -66 -6 -4 15 -8 46
-8 54 0 60 3 119 51 33 28 64 47 68 42 3 -5 30 -28 59 -51 49 -38 59 -42 110
-42 l55 0 -81 63 c-45 34 -80 65 -79 69 1 4 37 35 81 68 l78 60 -57 0 c-52 0
-63 -4 -104 -37 -25 -20 -52 -43 -59 -52 -10 -13 -16 -11 -45 15 -69 65 -87
74 -145 74 l-55 0 82 -64z"
        />
      </g>
    </svg>
  )
}

export default NitxIcon
