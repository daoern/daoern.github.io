import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { certItem } from "../styles/cert-item.module.scss"
import AnimatedButton from "./AnimatedButton"

export default function CertItem({ title, org, link, icon }) {
  return (
    <div className={certItem}>
      <GatsbyImage image={icon} alt="" className="mb-3" />
      <h5>{title}</h5>
      <p className="mb-4">{org}</p>
      <AnimatedButton text="View Cert" href={link} />
    </div>
  )
}
