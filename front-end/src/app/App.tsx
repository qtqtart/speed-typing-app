import { HomePage } from '@pages/HomePage'
import { Container } from '@radix-ui/themes'
import { FC } from 'react'

import { AppProvider } from './providers/AppProvider'

export const App: FC = () => {
  return (
    <AppProvider>
      <Container size='1'>
        <HomePage />
      </Container>
    </AppProvider>
  )
}
