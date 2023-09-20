import Card from '../components/Card'
import { SocialIcon } from '../components/SocialIcon'
import { Container, Flex, Grid } from '../components/helpers'
import { Stats, StatsArrow } from '../components/Stats'
import { Text, TextBig, TextStats } from './Typography'

const Overview = () => {
  return (
    <Container>
      <Grid>
        <Card hasBorder variant='facebook'>
          <Flex $alignItems='center' $gap={0.5} $justifyContent='center'>
            <SocialIcon src='img/icon-facebook.svg' />
            <Text>@username</Text>
          </Flex>
          <TextBig>
            1234 <TextStats as='span'>followers</TextStats>
          </TextBig>
          <Stats $justifyContent='center'>
            <StatsArrow src='img/icon-up.svg' /> 88 today
          </Stats>
        </Card>
        <Card hasBorder variant='twitter'>
          <Flex $alignItems='center' $gap={0.5} $justifyContent='center'>
            <SocialIcon src='img/icon-twitter.svg' />
            <Text>@username</Text>
          </Flex>
          <TextBig>
            8888 <TextStats as='span'>followers</TextStats>
          </TextBig>
          <Stats $justifyContent='center' $decrease>
            <StatsArrow src='img/icon-down.svg' /> 88 today
          </Stats>
        </Card>
        <Card hasBorder variant='instagram'>
          <Flex $alignItems='center' $gap={0.5} $justifyContent='center'>
            <SocialIcon src='img/icon-instagram.svg' />
            <Text>@username</Text>
          </Flex>
          <TextBig>
            8888 <TextStats as='span'>followers</TextStats>
          </TextBig>
          <Stats $justifyContent='center'>
            <StatsArrow src='img/icon-up.svg' /> 88 today
          </Stats>
        </Card>
        <Card hasBorder variant='youtube'>
          <Flex $alignItems='center' $gap={0.5} $justifyContent='center'>
            <SocialIcon src='img/icon-youtube.svg' />
            <Text>User Name</Text>
          </Flex>
          <TextBig>
            8888 <TextStats as='span'>subscribers</TextStats>
          </TextBig>
          <Stats $justifyContent='center'>
            <StatsArrow src='img/icon-up.svg' /> 88 today
          </Stats>
        </Card>
      </Grid>
    </Container>
  )
}

export default Overview
