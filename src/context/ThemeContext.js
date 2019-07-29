import React from "react"

const defaultTheme = {
  lightMode: true,
  toggleMode: () => {},
}

export const ThemeContext = React.createContext(defaultTheme)

const useEffectLightMode = () => {
  const [lightMode, setLightMode] = React.useState(true)

  React.useEffect(() => {
    const modeStore = localStorage.getItem("light") === "true"
    setLightMode(modeStore)
  }, [])

  return [lightMode, setLightMode]
}

export function ThemeProvider(props) {
  const [lightMode, setLightMode] = useEffectLightMode()

  function toggleMode() {
    const isLight = !lightMode
    localStorage.setItem("light", JSON.stringify(isLight))
    setLightMode(isLight)
  }

  return (
    <ThemeContext.Provider value={{ lightMode, toggleMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
