import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'

import NavBar from './components/Navbar'
import Overview from './components/Overview'
import OverviewToday from './components/OverviewToday'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <NavBar />
        <Overview />
        <OverviewToday />
      </>
    </ThemeProvider>
  )
}

export default App
