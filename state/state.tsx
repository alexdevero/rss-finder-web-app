import { createContext, useState } from 'react'

interface GlobalStateProviderUI {
  children: React.ReactNode;
}

export const GlobalState = createContext({
  state: {
    isDarkModeOn: false
  },
  handleDarkMode: () => {}
})

export const GlobalStateProvider = (props: GlobalStateProviderUI) => {
  const [state, setState] = useState({
    isDarkModeOn: false
  })

  const handleDarkMode = () => {
    document.body.classList.toggle('mode-dark')

    setState({
      isDarkModeOn: !state.isDarkModeOn
    })
  }

  return (
    <GlobalState.Provider value={{ state, handleDarkMode }}>
      {props.children}
    </GlobalState.Provider>
  )
}
