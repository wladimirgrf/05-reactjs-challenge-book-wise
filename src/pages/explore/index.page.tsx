import { Binoculars } from '@phosphor-icons/react'

import { NavigationMenu } from '@/components/NavigationMenu'
import { Container, ExploreSection, Header } from './styles'

export default function Explore() {
  return (
    <Container>
      <NavigationMenu />

      <ExploreSection>
        <Header>
          <h1>
            <Binoculars size={32} /> Explore
          </h1>
        </Header>
      </ExploreSection>
    </Container>
  )
}
