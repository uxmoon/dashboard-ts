import Modal from '../Modal'
import { SocialIcon } from '../SocialIcon'
import { Flex } from '../helpers'
import Chart from '../Chart'
import { Head, Body } from './styles'
import { Heading, Text } from '../Typography'
import Stats from '../Stats'

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
        <Text $marginBottom={2.5} $isBold>
          <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
          @nathanf
        </Text>
        <Flex>
          <Text>
            1987 <Text as='span'>total followers</Text>
          </Text>
          <Stats>81 new followers in the past 10 days</Stats>
          <Stats>12 new followers TODAY</Stats>
        </Flex>
      </Head>
      <Body>
        <Text>May 4 - May 13</Text>
        <Chart />
      </Body>
    </Modal>
  )
}

export default ModalStats
