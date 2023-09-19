import Card from './Card'
import { SocialIcon } from './SocialIcon'
import { Stats, StatsArrow, StatsText } from './Stats'
import { Heading2 } from './Typography'
import { Container, Flex, Grid } from './helpers'

const OverviewToday = () => {
  return (
    <>
      <Container>
        <Heading2 $marginBottom={1}>Overview - Today</Heading2>
        <Grid>
          <Card>
            <Flex $justifyContent='space-between'>
              <StatsText $flexDirection='column-reverse'>
                87 <span>Page views</span>
              </StatsText>
              <Flex $flexDirection='column' $justifyContent='space-between'>
                <SocialIcon src='img/icon-facebook.svg' />
                <Stats>
                  <StatsArrow src='img/icon-up.svg' /> 11
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
                <SocialIcon src='img/icon-facebook.svg' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' /> 22
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
                <SocialIcon src='img/icon-instagram.svg' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' /> 22
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
                <SocialIcon src='img/icon-instagram.svg' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' /> 22
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
                <SocialIcon src='img/icon-twitter.svg' />
                <Stats>
                  <StatsArrow src='img/icon-up.svg' /> 11
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
                <SocialIcon src='img/icon-twitter.svg' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' /> 22
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
                <SocialIcon src='img/icon-youtube.svg' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' /> 22
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
                <SocialIcon src='img/icon-youtube.svg' />
                <Stats $decrease>
                  <StatsArrow src='img/icon-down.svg' /> 22
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
