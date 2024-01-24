import { styled } from '@/styles/global'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
})

export const ExploreSection = styled('section', {
  margin: '4.5rem 6rem 0 6rem',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  h1: {
    fontSize: '$2xl',
    display: 'flex',
    alignItems: 'center',
    gap: '$3',

    svg: {
      color: '$green100',
    },
  },
})

export const CategoryList = styled('div', {
  display: 'flex',
  marginTop: '$10',
  gap: '$3',
})

export const CategoryItem = styled('button', {
  all: 'unset',
  padding: '$1 $4',
  border: '1px solid $purple100',
  fontSize: '$md',
  color: '$purple100',
  borderRadius: '$full',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
    backgroundColor: '$purple200',
  },

  variants: {
    active: {
      true: {
        borderColor: 'transparent',
        backgroundColor: '$purple200',
        color: '$gray100',
      },
    },
  },
})

export const BookList = styled('div', {
  marginTop: '3rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(318px, 1fr))',
  gap: '$5',
})
