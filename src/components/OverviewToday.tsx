import Card from './Card'
import { SocialIcon } from './SocialIcon'
import Stats from './Stats/Stats'
import { StatsText } from './Typography'
import { Heading } from './Typography'
import { Container, Flex, Grid } from './helpers'

const OverviewToday = () => {
  return (
    <>
      <Container>
        <Heading $size='md' $marginBottom={1}>
          Overview - Today
        </Heading>
        <Grid>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                87 <span>Page views</span>
              </StatsText>
              <Flex $flexDirection='column'>
                <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
                <Stats>3%</Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                52 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column'>
                <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
                <Stats isDecrease>2%</Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                5462 <span>Profile Views</span>
              </StatsText>
              <Flex $flexDirection='column'>
                <SocialIcon src='img/icon-instagram.svg' alt='Instagram' />
                <Stats>2257%</Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                52k <span>Profile Views</span>
              </StatsText>
              <Flex $flexDirection='column'>
                <SocialIcon src='img/icon-instagram.svg' alt='Instagram' />
                <Stats>1375%</Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                117 <span>Retweets</span>
              </StatsText>
              <Flex $flexDirection='column'>
                <SocialIcon src='img/icon-twitter.svg' alt='Twitter' />
                <Stats>303%</Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                507 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column'>
                <SocialIcon src='img/icon-twitter.svg' alt='Twitter' />
                <Stats>19%</Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                107 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column'>
                <SocialIcon src='img/icon-youtube.svg' alt='YouTube' />
                <Stats isDecrease>19%</Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                1407 <span>Total Views</span>
              </StatsText>
              <Flex $flexDirection='column'>
                <SocialIcon src='img/icon-youtube.svg' alt='YouTube' />
                <Stats isDecrease>12%</Stats>
              </Flex>
            </Flex>
          </Card>
        </Grid>
      </Container>
    </>
  )
}
export default OverviewToday
