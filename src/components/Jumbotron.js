import React from "react"
import { jumbotron } from "../styles/jumbotron.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "./SocialLinks"

export default function Jumbotron() {
  return (
    <div className={jumbotron + " jumbotron mt-4"}>
      <div className="row">
        <div className="col-12 col-lg-6 mt-5 align-self-center">
          <p className="overline">Hey There! My name is</p>
          <h1 className="">Dao Ern Lim</h1>
          <p>I’m a computer science undergraduate from Malaysia.</p>
          <a href="#about-me" className="btn btn-lg btn-primary">
            Explore More
          </a>
          <div className="mt-3">
            <SocialLinks />
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center pt-5">
          <StaticImage
            src="../images/body.png"
            alt="Dao Ern"
            placeholder="blurred"
          />
        </div>
      </div>
    </div>
  )
}
