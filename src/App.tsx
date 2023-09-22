import { useState } from 'react'

import { ModalContext } from './context/ModalContext'

import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'

import NavBar from './components/Navbar'
import Overview from './components/Overview'
import OverviewToday from './components/OverviewToday'
import { Container, Flex } from './components/helpers'
import Toggler from './components/Toggler'
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
        <ModalStats isOpen={isModalOpen} onClose={handleCloseModal} />
      </ModalContext.Provider>
    </ThemeProvider>
  )
}

export default App
