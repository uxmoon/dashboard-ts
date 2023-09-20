import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import { Heading1, Text } from '../Typography'
import { Container, Flex } from '../helpers'
import { useState } from 'react'

interface Props {
  toggleTheme: () => void
  isDarkTheme: boolean
}

const NavBar = ({ toggleTheme, isDarkTheme }: Props) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme)

  const onToggle = () => {
    setIsToggled(!isToggled)
    toggleTheme()
  }
  return (
    <Container $marginBottom={3}>
      <Flex $justifyContent='space-between'>
        <div>
          <Heading1>Social Media dashboard</Heading1>
          <Text>Total followers</Text>
        </div>
        <Flex $gap={0.5}>
          Dark mode
          <Toggle onChange={onToggle} />
        </Flex>
      </Flex>
    </Container>
  )
}
export default NavBar
