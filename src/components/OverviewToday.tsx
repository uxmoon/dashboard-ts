import Card from './Card'
import { CardGrid, CardGridItem } from './CardGrid'
import { SocialIcon } from './SocialIcon'
import Stats from './Stats/Stats'
import { StatsText } from './Typography'
import { Heading } from './Typography'
import { Container, Grid } from './helpers'

const OverviewToday = () => {
  return (
    <>
      <Container>
        <Heading $size='md' $marginBottom={1}>
          Overview - Today
        </Heading>
        <Grid>
          <Card>
            <CardGrid>
              <CardGridItem $areaName='one' $justifyContent='end'>
                <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
              </CardGridItem>
              <CardGridItem $areaName='two'>
                <StatsText $flexDirection='column-reverse'>
                  87 <span>Page views</span>
                </StatsText>
              </CardGridItem>
              <CardGridItem $areaName='three' $justifyContent='end'>
                <Stats>3%</Stats>
              </CardGridItem>
            </CardGrid>
          </Card>
          <Card>
            <CardGrid>
              <CardGridItem $areaName='one' $justifyContent='end'>
                <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
              </CardGridItem>
              <CardGridItem $areaName='two'>
                <StatsText $flexDirection='column-reverse'>
                  52 <span>Likes</span>
                </StatsText>
              </CardGridItem>
              <CardGridItem $areaName='three' $justifyContent='end'>
                <Stats isDecrease>2%</Stats>
              </CardGridItem>
            </CardGrid>
          </Card>
          <Card>
            <CardGrid>
              <CardGridItem $areaName='one' $justifyContent='end'>
                <SocialIcon src='img/icon-instagram.svg' alt='Instagram' />
              </CardGridItem>
              <CardGridItem $areaName='two'>
                <StatsText $flexDirection='column-reverse'>
                  5462 <span>Profile Views</span>
                </StatsText>
              </CardGridItem>
              <CardGridItem $areaName='three' $justifyContent='end'>
                <Stats>2257%</Stats>
              </CardGridItem>
            </CardGrid>
          </Card>
          <Card>
            <CardGrid>
              <CardGridItem $areaName='one' $justifyContent='end'>
                <SocialIcon src='img/icon-instagram.svg' alt='Instagram' />
              </CardGridItem>
              <CardGridItem $areaName='two'>
                <StatsText $flexDirection='column-reverse'>
                  52k <span>Profile Views</span>
                </StatsText>
              </CardGridItem>
              <CardGridItem $areaName='three' $justifyContent='end'>
                <Stats>1375%</Stats>
              </CardGridItem>
            </CardGrid>
          </Card>
          <Card>
            <CardGrid>
              <CardGridItem $areaName='one' $justifyContent='end'>
                <SocialIcon src='img/icon-twitter.svg' alt='Twitter' />
              </CardGridItem>
              <CardGridItem $areaName='two'>
                <StatsText $flexDirection='column-reverse'>
                  117 <span>Retweets</span>
                </StatsText>
              </CardGridItem>
              <CardGridItem $areaName='three' $justifyContent='end'>
                <Stats>303%</Stats>
              </CardGridItem>
            </CardGrid>
          </Card>
          <Card>
            <CardGrid>
              <CardGridItem $areaName='one' $justifyContent='end'>
                <SocialIcon src='img/icon-twitter.svg' alt='Twitter' />
              </CardGridItem>
              <CardGridItem $areaName='two'>
                <StatsText $flexDirection='column-reverse'>
                  507 <span>Likes</span>
                </StatsText>
              </CardGridItem>
              <CardGridItem $areaName='three' $justifyContent='end'>
                <Stats>19%</Stats>
              </CardGridItem>
            </CardGrid>
          </Card>
          <Card>
            <CardGrid>
              <CardGridItem $areaName='one' $justifyContent='end'>
                <SocialIcon src='img/icon-youtube.svg' alt='YouTube' />
              </CardGridItem>
              <CardGridItem $areaName='two'>
                <StatsText $flexDirection='column-reverse'>
                  107 <span>Likes</span>
                </StatsText>
              </CardGridItem>
              <CardGridItem $areaName='three' $justifyContent='end'>
                <Stats isDecrease>19%</Stats>
              </CardGridItem>
            </CardGrid>
          </Card>
          <Card>
            <CardGrid>
              <CardGridItem $areaName='one' $justifyContent='end'>
                <SocialIcon src='img/icon-youtube.svg' alt='YouTube' />
              </CardGridItem>
              <CardGridItem $areaName='two'>
                <StatsText $flexDirection='column-reverse'>
                  1407 <span>Total Views</span>
                </StatsText>
              </CardGridItem>
              <CardGridItem $areaName='three' $justifyContent='end'>
                <Stats isDecrease>12%</Stats>
              </CardGridItem>
            </CardGrid>
          </Card>
        </Grid>
      </Container>
    </>
  )
}
export default OverviewToday
