import { styled } from '@/styles/global'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
})

export const RecentRatingSection = styled('section', {
  marginTop: '4.5rem',
  marginLeft: '6rem',
})

export const RecentRatingTitle = styled('label', {
  h1: {
    fontSize: '$2xl',
    gap: '$3',
    display: 'flex',
    alignItems: 'center',

    svg: {
      color: '$green100',
    },
  },

  span: {
    display: 'flex',
    marginTop: '$10',
    marginBottom: '$4',
  },
})

export const RecentRatingList = styled('div', {})

export const PopularSection = styled('section', {
  margin: '9.125rem 6rem 0 4rem',
  fontSize: '$sm',

  label: {
    marginBottom: '$4',
    display: 'flex',
    justifyContent: 'space-between',

    a: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: '$purple100',
      fontWeight: '$bold',
      gap: '$2',
    },
  },
})
