import { useState } from 'react'
import type { Breed } from '../types/breed'

type CatImageProps = {
  breed: Breed
  className?: string
  loading?: 'lazy' | 'eager'
}

export function CatImage({ breed, className = '', loading = 'lazy' }: CatImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={`Fotografia indisponível: ${breed.name}`}>
        <span aria-hidden="true">✦</span>
        <span>{breed.name}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={breed.image}
      alt={breed.imageAlt}
      width={breed.imageWidth}
      height={breed.imageHeight}
      loading={loading}
      onError={() => setFailed(true)}
    />
  )
}
