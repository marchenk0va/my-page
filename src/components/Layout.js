import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
import "../styles/components/layout.scss"

import Navigation from "./Navigation"
import Main from "./Main"

const Layout = styled.div`
  background-color: ${props => (props.lightMode ? "#fff" : "#202326")};
  color: ${props => (props.lightMode ? "#000" : "#ededed")};
`

export default props => {
  const { lightMode } = React.useContext(ThemeContext)
  return (
    <Layout lightMode={lightMode}>
      <div className="layout">
        <Navigation />
        <Main>{props.children}</Main>
      </div>
    </Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
