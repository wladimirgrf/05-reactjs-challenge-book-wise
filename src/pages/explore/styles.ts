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
  alignItems: 'center',

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
