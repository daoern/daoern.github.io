import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  container,
  timeline,
  timelineItem,
  date,
  heading,
  subheading,
} from "../styles/timeline.module.scss"

export default function Timeline() {
  const { allExperiencesYaml } = useStaticQuery(
    graphql`
      query Experiences {
        allExperiencesYaml(sort: { fields: date, order: DESC }) {
          nodes {
            date
            title
            summary
            subtitle
          }
        }
      }
    `
  )
  const experiences = allExperiencesYaml.nodes
  return (
    <div className={container}>
      <div className={timeline}>
        <ul>
          {experiences.map(exp => (
            <li key={exp.title}>
              <div className={timelineItem}>
                <p className={date}>
                  {new Date(Date.parse(exp.date)).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short",
                  })}
                </p>
                <h4 className={heading}>{exp.title}</h4>
                <p className={subheading}>{exp.subtitle}</p>
                <p>{exp.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
