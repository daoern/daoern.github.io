import React from "react"
import { Icon } from "@iconify/react"
import { btn, icon } from "../styles/animated-btn.module.scss"

export default function AnimatedButton({ text, href }) {
  return (
    <a href={href} className={btn + " btn"} target="_blank" rel="noreferrer">
      {text}
      <Icon icon="uil:arrow-right" className={icon} width={24} height={24} />
    </a>
  )
}
