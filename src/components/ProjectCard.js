import React from "react"
import Octicon, { Repo } from "@primer/octicons-react"

import "../styles/components/project-card.scss"

const ProjectCard = ({ data }) => {
  const repoLink = `https://github.com/marchenk0va/${data.title}`
  const addColor =
    data.language == "JavaScript" ? "repo-add-color-js" : "repo-add-color-ts"
  return (
    <div className="repo">
      <div className="repo-item repo-title">
        <Octicon icon={Repo} className="icon" />
        <a className="repo-title-link" target="blank" href={repoLink}>
          {data.title}
        </a>
      </div>
      <div className="repo-item repo-description">
        <p>{data.description}</p>
      </div>
      <div className="repo-item repo-add">
        <span className="repo-add-block">
          <span className={`repo-add-color ${addColor}`}></span>
          <span className="repo-add-lang">{data.language}</span>
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
