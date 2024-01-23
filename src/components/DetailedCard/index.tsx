import Image from 'next/image'
import { Star } from '@phosphor-icons/react'

import bookImage from '../../../public/images/books/arquitetura-limpa.png'

import {
  BookDescription,
  BookDetails,
  BookRating,
  BookTitle,
  CardContainer,
  RatingStars,
} from './styles'

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

          <RatingStars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </RatingStars>
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
