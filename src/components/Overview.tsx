import Card from '../components/Card'
import { TextFollowers } from '../components/TextFollowers'
import { SocialIcon } from '../components/SocialIcon'
import { Container, Flex, Grid } from '../components/helpers'
import { Stats, StatsArrow } from '../components/Stats'
import { Text } from './Typography'

const Overview = () => {
  return (
    <Container>
      <Grid>
        <Card hasBorder variant='facebook'>
          <Flex $alignItems='center' $gap={0.5} $justifyContent='center'>
            <SocialIcon src='img/icon-facebook.svg' />
            <Text>@username</Text>
          </Flex>
          <TextFollowers>
            8888 <span>followers</span>
          </TextFollowers>
          <Stats $justifyContent='center'>
            <StatsArrow src='img/icon-up.svg' /> 88 today
          </Stats>
        </Card>
        <Card hasBorder variant='twitter'>
          <Flex $alignItems='center' $gap={0.5} $justifyContent='center'>
            <SocialIcon src='img/icon-twitter.svg' />
            <Text>@username</Text>
          </Flex>
          <TextFollowers>
            8888 <span>followers</span>
          </TextFollowers>
          <Stats $justifyContent='center' $decrease>
            <StatsArrow src='img/icon-down.svg' /> 88 today
          </Stats>
        </Card>
        <Card hasBorder variant='instagram'>
          <Flex $alignItems='center' $gap={0.5} $justifyContent='center'>
            <SocialIcon src='img/icon-instagram.svg' />
            <Text>@username</Text>
          </Flex>
          <TextFollowers>
            8888 <span>followers</span>
          </TextFollowers>
          <Stats $justifyContent='center'>
            <StatsArrow src='img/icon-up.svg' /> 88 today
          </Stats>
        </Card>
        <Card hasBorder variant='youtube'>
          <Flex $alignItems='center' $gap={0.5} $justifyContent='center'>
            <SocialIcon src='img/icon-youtube.svg' />
            <Text>User Name</Text>
          </Flex>
          <TextFollowers>
            8888 <span>subscribers</span>
          </TextFollowers>
          <Stats $justifyContent='center'>
            <StatsArrow src='img/icon-up.svg' /> 88 today
          </Stats>
        </Card>
      </Grid>
    </Container>
  )
}

export default Overview
