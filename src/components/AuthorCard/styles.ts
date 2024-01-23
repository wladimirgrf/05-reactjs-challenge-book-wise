import { styled } from '@/styles/global'

export const CardContainer = styled('article', {
  width: '100%',
  maxWidth: 608,
  padding: '$6',
  borderRadius: '$md',

  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
})

export const CardHeader = styled('header', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gap: '$4',
})

export const AuthorInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },

  strong: {
    fontWeight: '$regular',
  },
})

export const RatingStars = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$1',
})

export const CardBody = styled('div', {
  display: 'flex',
  gap: '$5',
  marginTop: '$8',
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const BookTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const BookDescription = styled('p', {
  fontSize: 'xs',
  color: '$gray300',

  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 4,
  whiteSpace: 'pre-wrap',
})
