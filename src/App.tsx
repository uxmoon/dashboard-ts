import { useState } from 'react'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'

import NavBar from './components/Navbar'
import Overview from './components/Overview'
import OverviewToday from './components/OverviewToday'
import { Container, Flex } from './components/helpers'
import { darkTheme, lightTheme } from './styles/theme'
import Toggler from './components/Toggler'

function App() {
  const [theme, setTheme] = useState('lightTheme')
  const isDarkTheme = theme === 'darkTheme'
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'lightTheme' : 'darkTheme')
  }
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <header>
          <Container $marginBottom={3}>
            <Flex $justifyContent='space-between'>
              <NavBar />
              <Toggler toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            </Flex>
          </Container>
        </header>
        <main>
          <Overview />
          <OverviewToday />
        </main>
      </>
    </ThemeProvider>
  )
}

export default App
