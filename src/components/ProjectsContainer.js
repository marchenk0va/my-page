import React from "react"
import styled from "styled-components"

import repos from "../data/repos"
import ProjectCard from "./ProjectCard"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default () => {
  return (
    <Wrapper>
      {repos.map(repo => {
        return <ProjectCard data={repo} key={repo.id} />
      })}
    </Wrapper>
  )
}
