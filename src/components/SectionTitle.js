import { Icon } from "@iconify/react"
import React from "react"

export default function SectionTitle({ title, icon, center = false }) {
  return (
    <div className={"mb-4" + (center ? " text-center" : "")}>
      <Icon icon={icon} height={32} width={32} />
      <p className="overline mt-1">{title}</p>
    </div>
  )
}
