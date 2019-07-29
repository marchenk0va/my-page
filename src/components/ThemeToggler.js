import React from "react"
import styled from "styled-components"

import { ThemeContext } from "../context/ThemeContext"

const TogglerLabel = styled.span`
  font-size: 27px;
  height: 100%;
  width: 100%;
`

export default () => {
  const { lightMode, toggleMode } = React.useContext(ThemeContext)
  return (
    <div onClick={toggleMode}>
      <TogglerLabel role="img" arial-label="moon">
        {lightMode ? "🌚" : "🌝"}
      </TogglerLabel>
    </div>
  )
}
