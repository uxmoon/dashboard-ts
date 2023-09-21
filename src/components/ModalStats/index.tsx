import Modal from '../Modal'
import { SocialIcon } from '../SocialIcon'
import { Flex } from '../helpers'
import Chart from '../Chart'

interface ModalStatsProps {
  isOpen: boolean
  onClose: () => void
}

const ModalStats = ({ isOpen, onClose }: ModalStatsProps) => {
  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <h1>Facebook followers</h1>
      <p>
        <SocialIcon src='img/icon-facebook.svg' alt='Facebook' />
        @nathanf
      </p>
      <Flex>
        <p>1987 total followers</p>
        <p>81 new followers in the past 10 days</p>
        <p>12 new followers TODAY</p>
      </Flex>
      <p>May 4 - May 13</p>
      <Chart />
    </Modal>
  )
}

export default ModalStats
