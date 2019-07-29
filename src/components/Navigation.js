import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

import { ThemeContext } from "../context/ThemeContext"
import ThemeToggler from "./ThemeToggler"

export default () => {
  const { lightMode, toggleMode } = React.useContext(ThemeContext)
  return (
    <div className="nav">
      <div>
        <Link
          to="/"
          className="nav-home"
          activeClassName={
            lightMode ? "nav-home-active-dark" : "nav-home-active-light"
          }
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          to="/about"
          className={
            lightMode ? "nav-link nav-link-dark" : "nav-link nav-link-light"
          }
        >
          me
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/projects"
          className={
            lightMode ? "nav-link nav-link-dark" : "nav-link nav-link-light"
          }
        >
          projects
        </Link>
      </div>
      <div className="nav-mode">
        <ThemeToggler onClick={toggleMode} />
      </div>
    </div>
  )
}
