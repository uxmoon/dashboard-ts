import { useState } from 'react'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'

import NavBar from './components/Navbar'
import Overview from './components/Overview'
import OverviewToday from './components/OverviewToday'
import { darkTheme, lightTheme } from './styles/theme'

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
        <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Overview />
        <OverviewToday />
      </>
    </ThemeProvider>
  )
}

export default App
