import Image from 'next/image'

import { styled } from '@/styles/global'

export const CardContainer = styled('article', {
  padding: '$5',
  borderRadius: '$md',

  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  backgroundColor: '$gray700',
  gap: '$5',

  variants: {
    size: {
      sm: {
        width: 324,
        height: 130,
      },
      md: {
        width: 318,
        height: 184,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const BookImage = styled(Image, {
  height: 'auto',

  variants: {
    size: {
      sm: { width: 64 },
      md: { width: 108 },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$5',
  gridColumn: 2,
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
