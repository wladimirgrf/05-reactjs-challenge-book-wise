import { Star } from '@phosphor-icons/react'

import bookImage from '../../../public/images/books/arquitetura-limpa.png'

import {
  BookDetails,
  BookImage,
  BookTitle,
  CardContainer,
  RatingStars,
} from './styles'

interface CompactCardProps {
  size: 'sm' | 'md'
}

export function CompactCard({ size }: CompactCardProps) {
  return (
    <CardContainer size={size}>
      <BookImage size={size} src={bookImage} quality={100} alt="" />

      <BookDetails>
        <BookTitle>
          <strong>O Hobbit</strong>
          <span>J.R.R. Tolkien</span>
        </BookTitle>

        <RatingStars>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </RatingStars>
      </BookDetails>
    </CardContainer>
  )
}
