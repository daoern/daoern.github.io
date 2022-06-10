import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import CertItem from "./CertItem"

export default function Certificates() {
  const { allCertificatesYaml } = useStaticQuery(
    graphql`
      query Certificates {
        allCertificatesYaml {
          nodes {
            org
            icon {
              childImageSharp {
                gatsbyImageData(width: 32, placeholder: BLURRED)
              }
            }
            cred
            link
            title
          }
        }
      }
    `
  )
  const certificates = allCertificatesYaml.nodes
  let buildCertItem = cert => (
    <CertItem
      key={cert.title}
      title={cert.title}
      org={cert.org}
      link={cert.link}
      icon={getImage(cert.icon)}
    />
  )
  return (
    <div className="row">
      <div className="col col-12 col-md-6">
        {certificates
          .filter((a, i) => i % 2 === 0)
          .map(cert => buildCertItem(cert))}
      </div>
      <div className="col col-12 col-md-6">
        {certificates
          .filter((a, i) => i % 2 === 1)
          .map(cert => buildCertItem(cert))}
      </div>
    </div>
  )
}
