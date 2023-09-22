import { createContext } from 'react'

export type DarkModeProps = {
  toggleTheme: () => void
  isDarkTheme: boolean
}

export const DarkMode = createContext<DarkModeProps>({} as DarkModeProps)
