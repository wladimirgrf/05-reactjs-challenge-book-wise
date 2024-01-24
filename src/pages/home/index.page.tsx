import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

import { AuthorCard } from '@/components/AuthorCard'
import { CompactCard } from '@/components/CompactCard'
import { NavigationMenu } from '@/components/NavigationMenu'
import {
  Container,
  PopularSection,
  RecentRatingList,
  RecentRatingSection,
  RecentRatingTitle,
} from './styles'

export default function Home() {
  return (
    <Container>
      <NavigationMenu />

      <RecentRatingSection>
        <RecentRatingTitle>
          <h1>
            <ChartLineUp size={32} /> Home
          </h1>
          <span>Most recent reviews</span>
        </RecentRatingTitle>

        <RecentRatingList>
          <AuthorCard />
        </RecentRatingList>
      </RecentRatingSection>

      <PopularSection>
        <label>
          <span>Popular books</span>
          <a href="#">
            See all <CaretRight />
          </a>
        </label>

        <CompactCard size="sm" />
      </PopularSection>
    </Container>
  )
}
