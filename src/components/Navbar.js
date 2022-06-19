import { Icon } from "@iconify/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import {
  navbar,
  hamburgerIcon,
  hover,
  navItem,
} from "../styles/navbar.module.scss"

export default function Navbar({ isHover = false, items = [], activeItem }) {
  const [state, setState] = useState({
    expand: false,
  })

  return (
    <nav
      className={
        navbar +
        (isHover ? ` ${hover}` : "") +
        " navbar navbar-light bg-white navbar-expand-lg sticky-top justify-content-between"
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <StaticImage
            className="d-inline-block align-top mr-2"
            src="../images/daoern-logo.png"
            alt="Dao Ern logo"
            placeholder="tracedSVG"
            layout="fixed"
            width={24}
            height={24}
            style={{ transform: "translateY(12.5%)" }}
          />
          daoern
        </div>

        <button
          className={"navbar-toggler " + (state.expand ? "" : "collapsed")}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={state.expand ? "true" : "false"}
          aria-label="Toggle navigation"
          id="nav-menu"
          onClick={() => setState({ expand: !state.expand })}
        >
          <Icon
            icon={state.expand ? "uil:times" : "uil:bars"}
            width={32}
            height={32}
          />
        </button>
        <div
          className={"collapse navbar-collapse " + (state.expand ? "show" : "")}
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav ml-auto mt-4 mt-lg-0">
            {items.map(item => (
              <li key={item.to}>
                <Link
                  className={
                    `nav-item nav-link ${navItem} ` +
                    (activeItem === item.name ? "active" : "")
                  }
                  to={item.to}
                  onClick={() => setState({ expand: false })}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
