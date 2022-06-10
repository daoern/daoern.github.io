import React, { useEffect, useState } from "react"
import Head from "../shared/Head"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children, navItems = [], activeNavItem }) {
  const [state, setState] = useState({
    scrolled: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled =
        document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
      if (isScrolled !== state.scrolled) {
        setState({
          scrolled: !state.scrolled,
        })
      }
    }
    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [state.scrolled])

  return (
    <div>
      <Head />
      <Navbar
        isHover={state.scrolled}
        items={navItems}
        activeItem={activeNavItem}
      />
      {children}
      <Footer />
    </div>
  )
}
