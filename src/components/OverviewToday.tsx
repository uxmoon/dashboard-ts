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
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
                <Stats>
                  <StatsArrow src='img/icon-up.svg' alt='Increase' /> 11
                </Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                52 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 22
                </Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                52 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-instagram.svg' alt='Instagram' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 22
                </Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                52 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-instagram.svg' alt='Instagram' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 22
                </Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                87 <span>Page views</span>
              </StatsText>
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-twitter.svg' alt='Twitter' />
                <Stats>
                  <StatsArrow src='img/icon-up.svg' alt='Increase' /> 11
                </Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                52 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-twitter.svg' alt='Twitter' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 22
                </Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                52 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-youtube.svg' alt='YouTube' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 22
                </Stats>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                52 <span>Likes</span>
              </StatsText>
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-youtube.svg' alt='YouTube' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' alt='Decrease' /> 22
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
