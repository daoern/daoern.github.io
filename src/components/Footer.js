import React from "react"
import SocialLinks from "./SocialLinks"
import { footer } from "../styles/footer.module.scss"

export default function Footer() {
  return (
    <footer className={footer + " container pt-3 pb-5"}>
      <div className="row justify-content-between">
        <div className="col-auto me-auto align-self-center">
          <p>&copy; 2022 by Dao Ern Lim</p>
        </div>
        <div className="col-auto">
          <div className="social">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}
