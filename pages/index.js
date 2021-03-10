import ReactGA from 'react-ga'

import { GlobalStateProvider } from './../state/state'

import { App } from './../components/app'

ReactGA.initialize('G-DQCGYFQ6S7')
ReactGA.pageview('/')

export default function Home() {
  return (
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  )
}
