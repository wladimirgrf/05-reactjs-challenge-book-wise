import Image from 'next/image'

import {
  AuthorInfo,
  BookDescription,
  BookDetails,
  BookTitle,
  CardBody,
  CardContainer,
  CardHeader,
} from './styles'

import bookImage from '../../../public/images/books/arquitetura-limpa.png'
import { Avatar } from '../Avatar'
import StarRating from '../StarRating'

export function AuthorCard() {
  return (
    <CardContainer>
      <CardHeader>
        <Avatar src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />

        <AuthorInfo>
          <strong>Jaxson Dias</strong>
          <span>Today</span>
        </AuthorInfo>

        <StarRating rating={2} readOnly />
      </CardHeader>

      <CardBody>
        <Image
          src={bookImage}
          width={108}
          height={152}
          quality={100}
          priority
          alt=""
        />
        <BookDetails>
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
      </CardBody>
    </CardContainer>
  )
}
