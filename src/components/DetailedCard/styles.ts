import { styled } from '@/styles/global'

export const CardContainer = styled('article', {
  width: '100%',
  maxWidth: 608,
  padding: '$6',
  borderRadius: '$md',

  display: 'flex',
  backgroundColor: '$gray600',
  gap: '$5',
})

export const BookRating = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
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
  '-webkit-line-clamp': 2,
  whiteSpace: 'pre-wrap',
})
