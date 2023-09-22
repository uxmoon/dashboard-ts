import Modal from '../Modal'
import { SocialIcon } from '../SocialIcon'
import Chart from '../Chart'
import {
  Head,
  Body,
  StatsNumbers,
  StatsNumbersItem,
  StatsNumbersLegend,
} from './styles'
import { Heading, Text } from '../Typography'
import Arrow from '../Stats/Arrow'

interface ModalStatsProps {
  isOpen: boolean
  onClose: () => void
}

const ModalStats = ({ isOpen, onClose }: ModalStatsProps) => {
  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <Head>
        <Heading as='h1' $marginBottom={1}>
          Facebook followers
        </Heading>
        <Text $marginBottom={2} $isBold $isFlex>
          <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
          @nathanf
        </Text>
        <StatsNumbers>
          <StatsNumbersItem>
            1987
            <StatsNumbersLegend as='span'>total followers</StatsNumbersLegend>
          </StatsNumbersItem>
          <StatsNumbersItem $increase>
            <Arrow lg noMargin /> 81
            <StatsNumbersLegend as='span'>
              new followers in the past 10 days
            </StatsNumbersLegend>
          </StatsNumbersItem>
          <StatsNumbersItem $increase>
            <Arrow lg noMargin />
            12
            <StatsNumbersLegend as='span'>
              new followers TODAY
            </StatsNumbersLegend>
          </StatsNumbersItem>
        </StatsNumbers>
      </Head>
      <Body>
        <Text $marginBottom={1}>May 4 - May 13</Text>
        <Chart />
      </Body>
    </Modal>
  )
}

export default ModalStats
