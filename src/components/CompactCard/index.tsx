import bookImage from '../../../public/images/books/arquitetura-limpa.png'

import { BookDetails, BookImage, BookTitle, CardContainer } from './styles'
import StarRating from '../StarRating'

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

        <StarRating rating={2} readOnly />
      </BookDetails>
    </CardContainer>
  )
}
