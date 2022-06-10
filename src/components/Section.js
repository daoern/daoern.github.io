import React from "react"

export default function Section({ children, id, anchorRef }) {
  return (
    <section className="py-2">
      <span className="anchor" id={id} ref={anchorRef}></span>
      {children}
    </section>
  )
}
