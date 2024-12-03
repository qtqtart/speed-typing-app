import { Theme } from '@radix-ui/themes'
import { FC, PropsWithChildren } from 'react'

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Theme>{children}</Theme>
}
