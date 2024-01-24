import { styled } from '@/styles/global'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
})

export const ExploreSection = styled('section', {
  marginTop: '4.5rem',
  marginLeft: '6rem',
})

export const Header = styled('header', {
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
