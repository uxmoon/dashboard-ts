import { useState } from 'react'

import { ModalContext } from './context/ModalContext'
import { DarkMode } from './context/DarkModeContext'

import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'

import NavBar from './components/Navbar'
import Overview from './components/Overview'
import OverviewToday from './components/OverviewToday'
import ModalStats from './components/ModalStats'

function App() {
  const [theme, setTheme] = useState('lightTheme')
  const [isModalOpen, setModalOpen] = useState(false)
  const isDarkTheme = theme === 'darkTheme'

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'lightTheme' : 'darkTheme')
  }

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ModalContext.Provider value={{ handleOpenModal }}>
        <DarkMode.Provider value={{ toggleTheme, isDarkTheme }}>
          <GlobalStyles />
          <NavBar />
          <main>
            <Overview />
            <OverviewToday />
          </main>
          <ModalStats isOpen={isModalOpen} onClose={handleCloseModal} />
        </DarkMode.Provider>
      </ModalContext.Provider>
    </ThemeProvider>
  )
}

export default App
