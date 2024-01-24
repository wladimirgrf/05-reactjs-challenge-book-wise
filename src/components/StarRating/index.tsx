import { useState } from 'react'
import { Star } from '@phosphor-icons/react'

import { RatingContainer } from './styles'

interface StarRatingProps {
  rating: number
  readOnly?: boolean
}

export function StarRating({ rating, readOnly = true }: StarRatingProps) {
  const [currentRating, setCurrentRating] = useState(rating)

  function handleSetRating(newRate: number) {
    if (!readOnly) {
      rating = newRate
      setCurrentRating(newRate)
    }
  }

  return (
    <RatingContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          weight={star <= currentRating ? 'fill' : 'regular'}
          onClick={() => handleSetRating(star)}
          onMouseOver={() => !readOnly && setCurrentRating(star)}
          onMouseLeave={() => !readOnly && setCurrentRating(rating)}
          style={{ cursor: readOnly ? 'default' : 'pointer' }}
        />
      ))}
    </RatingContainer>
  )
}

export default StarRating
