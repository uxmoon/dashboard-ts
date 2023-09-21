import React, { useRef, useEffect, useState } from 'react'

import { Dialog, CloseButton } from './styles'

interface ModalProps {
  isOpen: boolean
  hasCloseBtn?: boolean
  onClose?: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children,
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen)
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleCloseModal = () => {
    if (onClose) {
      onClose()
    }
    setModalOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
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
        <CloseButton onClick={handleCloseModal}>Close</CloseButton>
      )}
      {children}
    </Dialog>
  )
}

export default Modal
