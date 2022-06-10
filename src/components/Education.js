import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Education() {
  const { file } = useStaticQuery(
    graphql`
      query Education {
        file(relativePath: { eq: "education.yaml" }) {
          childDataYaml {
            education {
              startDate
              programme
              institution
              endDate
              description
              graphics {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `
  )
  const eduData = file.childDataYaml.education
  const toMonYYYY = dateStr =>
    new Date(Date.parse(dateStr)).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
    })
  return (
    <div className="row">
      <div className="col-md-auto d-flex justify-content-center order-12 order-md-1">
        <StaticImage
          src="../images/utar-fict.jpg"
          alt="Retro Computer"
          placeholder="blurred"
          height={280}
          width={380}
          imgStyle={{ borderRadius: "50px" }}
        />
      </div>
      <div className="col align-self-center order-1 order-md-12">
        <div className="showcase mt-4">
          <p className="date">{`${toMonYYYY(eduData.startDate)} - ${toMonYYYY(
            eduData.endDate
          )}`}</p>
          <h4 className="heading">{eduData.programme}</h4>
          <p className="subheading">{eduData.institution}</p>
        </div>
        <p>{eduData.description}</p>
        {/* <div className="row">
          <div className="col"></div>
          <div className="col">s</div>
        </div> */}
      </div>
    </div>
  )
}
