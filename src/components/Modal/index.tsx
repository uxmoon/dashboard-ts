import { useRef, useEffect, useState, KeyboardEvent, ReactNode } from 'react'

import { Dialog, CloseButton } from './styles'
import { VisuallyHidden } from '../Typography'

interface ModalProps {
  isOpen: boolean
  hasCloseBtn?: boolean
  onClose?: () => void
  children: ReactNode
}

const Modal = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children,
}: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState(isOpen)
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleCloseModal = () => {
    if (onClose) {
      onClose()
    }
    setModalOpen(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal()
    }
  }

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const modalElement = modalRef.current

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal()
      } else {
        modalElement.close()
      }
    }
  }, [isModalOpen])

  return (
    <Dialog ref={modalRef} onKeyDown={handleKeyDown}>
      {hasCloseBtn && (
        <CloseButton onClick={handleCloseModal}>
          <VisuallyHidden>Close</VisuallyHidden>
          &times;
        </CloseButton>
      )}
      {children}
    </Dialog>
  )
}

export default Modal
