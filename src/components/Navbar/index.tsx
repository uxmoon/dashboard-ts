import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import { Heading1, Text, TextToggle } from '../Typography'
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
        <Flex $gap={0.5} $alignItems='center'>
          <TextToggle htmlFor='mode'>
            Dark Mode
            <Toggle onChange={onToggle} icons={false} id='mode' />
          </TextToggle>
        </Flex>
      </Flex>
    </Container>
  )
}
export default NavBar
