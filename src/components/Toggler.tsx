import { useState } from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import { TextToggle } from './Typography'
import { Flex } from './helpers'

interface Props {
  toggleTheme: () => void
  isDarkTheme: boolean
}

const Toggler = ({ toggleTheme, isDarkTheme }: Props) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme)

  const onToggle = () => {
    setIsToggled(!isToggled)
    toggleTheme()
  }
  return (
    <Flex $gap={0.5} $alignItems='center'>
      <TextToggle htmlFor='mode'>Dark Mode</TextToggle>
      <Toggle onChange={onToggle} icons={false} id='mode' />
    </Flex>
  )
}
export default Toggler
