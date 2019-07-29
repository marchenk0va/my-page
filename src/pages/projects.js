import React from "react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ProjectsContainer from "../components/ProjectsContainer"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div style={{ display: "flex", flexDirection: "row" }}>
      <ProjectsContainer />
    </div>
  </Layout>
)

export default Projects
