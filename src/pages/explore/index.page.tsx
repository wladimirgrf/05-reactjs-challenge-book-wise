import { Binoculars } from '@phosphor-icons/react'

import { SearchInput } from '@/components/SearchInput'
import { NavigationMenu } from '@/components/NavigationMenu'
import { CompactCard } from '@/components/CompactCard'
import {
  BookList,
  CategoryItem,
  CategoryList,
  Container,
  ExploreSection,
  Header,
} from './styles'

export default function Explore() {
  return (
    <Container>
      <NavigationMenu />

      <ExploreSection>
        <Header>
          <h1>
            <Binoculars size={32} /> Explore
          </h1>

          <SearchInput _size="md" />
        </Header>

        <CategoryList>
          <CategoryItem>All</CategoryItem>
          <CategoryItem active>Drama</CategoryItem>
        </CategoryList>

        <BookList>
          <CompactCard size="md" />
          <CompactCard size="md" />
          <CompactCard size="md" />
          <CompactCard size="md" />
          <CompactCard size="md" />
          <CompactCard size="md" />
        </BookList>
      </ExploreSection>
    </Container>
  )
}
