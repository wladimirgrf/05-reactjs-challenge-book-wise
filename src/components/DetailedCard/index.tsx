import Image from 'next/image'

import bookImage from '../../../public/books/arquitetura-limpa.png'

import {
  BookDescription,
  BookDetails,
  BookRating,
  BookTitle,
  CardContainer,
} from './styles'
import StarRating from '../StarRating'

export function DetailedCard() {
  return (
    <CardContainer>
      <Image
        src={bookImage}
        width={108}
        height={152}
        quality={100}
        priority
        alt=""
      />

      <BookDetails>
        <BookRating>
          <span>2 days ago</span>

          <StarRating rating={2} readOnly />
        </BookRating>

        <BookTitle>
          <strong>O Hobbit</strong>
          <span>J.R.R. Tolkien</span>
        </BookTitle>

        <BookDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          deleniti molestias corporis consequuntur beatae deserunt blanditiis
          possimus harum enim tenetur, maxime suscipit eum saepe cum nostrum,
          provident voluptas! Asperiores, quasi?
        </BookDescription>
      </BookDetails>
    </CardContainer>
  )
}
