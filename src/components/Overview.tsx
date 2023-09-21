import Card from '../components/Card'
import { SocialIcon } from '../components/SocialIcon'
import { Center, Container, Flex, Grid } from '../components/helpers'
import { Text, TextBig, TextStats } from './Typography'
import Stats from './Stats/Stats'

const Overview = () => {
  return (
    <Container $marginBottom={3}>
      <Grid>
        <Card hasBorder variant='facebook'>
          <Flex
            $alignItems='center'
            $gap={0.5}
            $justifyContent='center'
            $marginBottom={1}
          >
            <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
            <Text>@nathanf</Text>
          </Flex>
          <TextBig>
            1987 <TextStats as='span'>followers</TextStats>
          </TextBig>
          <Center>
            <Stats>12 Today</Stats>
          </Center>
        </Card>
        <Card hasBorder variant='twitter'>
          <Flex
            $alignItems='center'
            $gap={0.5}
            $justifyContent='center'
            $marginBottom={1}
          >
            <SocialIcon src='img/icon-twitter.svg' alt='Twitter' />
            <Text>@nathanf</Text>
          </Flex>
          <TextBig>
            1044 <TextStats as='span'>followers</TextStats>
          </TextBig>
          <Center>
            <Stats>99 Today</Stats>
          </Center>
        </Card>
        <Card hasBorder variant='instagram'>
          <Flex
            $alignItems='center'
            $gap={0.5}
            $justifyContent='center'
            $marginBottom={1}
          >
            <SocialIcon src='img/icon-instagram.svg' alt='Instagram' />
            <Text>@realnathanf</Text>
          </Flex>
          <TextBig>
            11k <TextStats as='span'>followers</TextStats>
          </TextBig>
          <Center>
            <Stats>1099 Today</Stats>
          </Center>
        </Card>
        <Card hasBorder variant='youtube'>
          <Flex
            $alignItems='center'
            $gap={0.5}
            $justifyContent='center'
            $marginBottom={1}
          >
            <SocialIcon src='img/icon-youtube.svg' alt='YouTube' />
            <Text>Nathan F.</Text>
          </Flex>
          <TextBig>
            8239 <TextStats as='span'>subscribers</TextStats>
          </TextBig>
          <Center>
            <Stats isDecrease>144 Today</Stats>
          </Center>
        </Card>
      </Grid>
    </Container>
  )
}

export default Overview
