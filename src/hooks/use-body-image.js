import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

export const useBodyImage = () => {
  const { data } = useStaticQuery(
    graphql`
      query BodyImage {
        file(relativePath: { eq: "body.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  console.log(data)
  return data.file
}
