import { Heading, Text } from '../Typography'

const NavBar = () => {
  return (
    <div>
      <Heading $size='lg' as='h1'>
        Social Media dashboard
      </Heading>
      <Text>Total Followers: 23,004</Text>
    </div>
  )
}
export default NavBar
