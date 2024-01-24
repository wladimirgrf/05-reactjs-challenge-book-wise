import { styled } from '@/styles/global'

export const SearchContainer = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  border: '1px solid $gray500',
  padding: '$3 $5',
  borderRadius: '$sm',
  gap: '$2',

  svg: {
    color: '$gray500',
  },

  '&:has(input:focus)': {
    borderColor: '$green200',
  },

  variants: {
    size: {
      md: { maxWidth: 433 },
      full: { maxWidth: 'none' },
    },
  },

  defaultVariants: {
    size: 'full',
  },
})

export const TextInput = styled('input', {
  all: 'unset',
  fontSize: '$sm',

  '&::placeholder': {
    color: '$gray400',
  },
})
