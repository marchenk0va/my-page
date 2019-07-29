import React from "react"
import GitHubButton from "react-github-btn"
import { Link } from "gatsby"

import "../styles/pages/home.scss"
import linkedin from "../images/linkedin-logo.png"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="container-header">
        <h1 className="header">Hey, I am Maria</h1>
        <span>from Wrocław, Poland</span>
      </div>
      <div className="container-description">
        <p>
          Working as JavaScript developer
          <br />I like learning new things while coding and meeting people
          <br />
          <br />
          <Link to="/projects">See what I am working on</Link>
        </p>
      </div>
      <div className="icons-container">
        <a
          href="https://www.linkedin.com/in/mariia-marchenkova-008276160"
          target="blank"
        >
          <img src={linkedin} alt="linkedin" className="icon" />
        </a>
        <GitHubButton data-size="large" href="https://github.com/marchenk0va">
          Follow
        </GitHubButton>
      </div>
    </div>
  </Layout>
)

export default IndexPage
