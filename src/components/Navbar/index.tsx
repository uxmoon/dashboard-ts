import { useContext } from 'react'
import { DarkMode } from '../../context/DarkModeContext'

import Toggler from '../Toggler'
import { Heading, Text } from '../Typography'
import { Container, Flex } from '../helpers'

const NavBar = () => {
  const { toggleTheme, isDarkTheme } = useContext(DarkMode)
  return (
    <header>
      <Container $marginBottom={3}>
        <Flex $justifyContent='space-between'>
          <div>
            <Heading $size='lg' as='h1'>
              Social Media Dashboard
            </Heading>
            <Text>Total Followers: 23,004</Text>
          </div>
          <Toggler toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </Flex>
      </Container>
    </header>
  )
}
export default NavBar
