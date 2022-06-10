import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { jumbotron } from "../styles/404.module.scss"

export default function NotFoundPage() {
  const sections = [
    { name: "About", id: "about" },
    { name: "Education", id: "edu" },
    { name: "Experiences", id: "exp" },
    { name: "Certificates", id: "cert" },
  ]
  return (
    <Layout
      navItems={[...sections.map(s => ({ name: s.name, to: `/#${s.id}` }))]}
    >
      <div className="container py-5">
        <div className={jumbotron + " p-5"}>
          <h1>404</h1>
          <h2>Oops! Page not found.</h2>
          <p>We can't find the page you're looking for.</p>
          <Link to="/">Go back home</Link>
        </div>
      </div>
    </Layout>
  )
}
