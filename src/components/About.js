import { Icon } from "@iconify/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function About() {
  const { file } = useStaticQuery(
    graphql`
      query About {
        file(relativePath: { eq: "about.yaml" }) {
          childDataYaml {
            about {
              body
              headline
              graphics {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `
  )
  const aboutData = file.childDataYaml.about
  return (
    <div className="row header-row">
      <div className="col align-self-center">
        <div className="mb-4">
          <Icon icon="uil:user-square" height={32} width={32} />
          <p className="overline mt-1">About Me</p>
          <h2 className="title">{aboutData.headline}</h2>
        </div>
        <p>{aboutData.body}</p>
      </div>
      <div className="col-md-auto d-flex justify-content-center">
        <StaticImage
          src="../images/computer.png"
          alt="Retro Computer"
          placeholder="blurred"
          width={280}
          height={280}
          imgStyle={{ borderRadius: "50px" }}
        />
      </div>
    </div>
  )
}
