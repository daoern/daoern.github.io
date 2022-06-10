import React, { useEffect, useState } from "react"
import About from "../components/About"
import Certificates from "../components/Certificates"
import Education from "../components/Education"
import Footer from "../components/Footer"
import Jumbotron from "../components/Jumbotron"
import Layout from "../components/layout"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Timeline from "../components/Timeline"

export default function Home() {
  const sections = [
    { name: "About", id: "about" },
    { name: "Education", id: "edu" },
    { name: "Experiences", id: "exp" },
    { name: "Certificates", id: "cert" },
  ].map(s => ({ ...s, anchorRef: React.createRef() }))

  const [state, setState] = useState({
    activeSection: null,
  })

  useEffect(() => {
    const handleScroll = () => {
      //get current active section
      const windowOffset = Math.ceil(window.innerHeight / 4)
      let activeSection = null
      sections.forEach((s, i) => {
        if (s.anchorRef.current == null) {
          return
        }
        const offsetTop = s.anchorRef.current.offsetTop
        const nextOffsetTop =
          i + 1 < sections.length
            ? sections[i + 1].anchorRef.current.offsetTop
            : document.documentElement.offsetHeight
        //console.log(offsetTop + " " + nextOffsetTop + " " + window.scrollY)
        if (
          window.scrollY >= offsetTop - windowOffset &&
          window.scrollY <= nextOffsetTop - windowOffset
        ) {
          activeSection = s.name
        }
      })
      if (activeSection !== state.activeSection) {
        //console.log(activeSection)
        setState({
          activeSection: activeSection,
        })
      }
    }
    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <Layout
      navItems={[...sections.map(s => ({ name: s.name, to: `#${s.id}` }))]}
      activeNavItem={state.activeSection}
    >
      <div className="container">
        <Jumbotron />

        <Section id="about" anchorRef={sections[0].anchorRef}>
          <About />
        </Section>

        <Section id="edu" anchorRef={sections[1].anchorRef}>
          <SectionTitle
            title="Education"
            icon="uil:graduation-cap"
            center={true}
          />
          <Education />
        </Section>

        <Section id="exp" anchorRef={sections[2].anchorRef}>
          <SectionTitle
            title="Experiences"
            icon="uil:briefcase-alt"
            center={true}
          />
          <Timeline />
        </Section>

        <Section id="cert" anchorRef={sections[3].anchorRef}>
          <SectionTitle title="Certificates" icon="uil:award" center={true} />
          <Certificates />
        </Section>
      </div>
      <Footer />
    </Layout>
  )
}
