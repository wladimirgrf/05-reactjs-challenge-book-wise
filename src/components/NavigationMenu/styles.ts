import { styled } from '@/styles/global'

export const MenuContainer = styled('nav', {
  width: 232,
  height: 988,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  alignItems: 'center',

  background: 'linear-gradient(0deg, $gray700 70%, $purple200 150%)',
  borderRadius: '$md',
  margin: '$5 $5 0',
  padding: '$10',
})

export const NavigationBox = styled('div', {
  width: 138,
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
})

export const NavigationLink = styled('a', {
  fontSize: '$md',
  fontWeight: '$bold',
  width: '100%',
  display: 'flex',
  gap: '$4',

  '& + &': {
    marginTop: '$6',
  },

  '&::before': {
    content: '',
    width: '4px',
    height: '24px',
    borderRadius: '$full',
  },

  variants: {
    active: {
      true: {
        '&::before': {
          background: '$gradient-vertical',
        },
      },
    },
  },
})

export const LoginBox = styled('div', {
  position: 'absolute',
  bottom: '$6',
  textAlign: 'center',
})

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',

  fontSize: '$md',
  fontWeight: '$bold',
  gap: '$3',
})
