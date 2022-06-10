import { Icon } from "@iconify/react"
import React from "react"
import { social, iconBtn } from "../styles/social.module.scss"

export default function SocialLinks() {
  return (
    <div className={social}>
      <ul>
        <li>
          <a
            href="https://twitter.com/daoern"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={iconBtn}>
              <Icon icon="uil:twitter-alt" height={24} />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/daoern"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={iconBtn}>
              <Icon icon="uil:github-alt" height={24} />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/daoern/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={iconBtn}>
              <Icon icon="uil:linkedin-alt" height={24} />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/13640920/daoern"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={iconBtn}>
              <Icon icon="akar-icons:stack-overflow-fill" height={24} />
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
