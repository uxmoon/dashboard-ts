import { createContext } from 'react'

export type ModalContextProps = {
  handleOpenModal: () => void
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
)
