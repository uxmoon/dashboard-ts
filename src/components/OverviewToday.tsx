import Card from './Card'
import { SocialIcon } from './SocialIcon'
import { Stats, StatsArrow, StatsText } from './Stats'
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
                <Stats>
                  <StatsArrow src='img/icon-up.svg' alt='Increase' /> 3%
                </Stats>
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
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 2%
                </Stats>
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
                <Stats>
                  <StatsArrow src='img/icon-up.svg' alt='Increase' /> 2257%
                </Stats>
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
                <Stats>
                  <StatsArrow src='img/icon-up.svg' alt='Increase' /> 1375%
                </Stats>
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
                <Stats>
                  <StatsArrow src='img/icon-up.svg' alt='Increase' /> 303%
                </Stats>
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
                <Stats>
                  <StatsArrow src='img/icon-up.svg' alt='Increase' /> 19%
                </Stats>
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
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 19%
                </Stats>
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
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 12%
                </Stats>
              </Flex>
            </Flex>
          </Card>
        </Grid>
      </Container>
    </>
  )
}
export default OverviewToday
