import type { Breed } from '../types/breed'
import { CatImage } from './CatImage'

type BreedCardProps = {
  breed: Breed
  index: number
}

export function BreedCard({ breed, index }: BreedCardProps) {
  return (
    <a className="breed-card" href={`#${breed.id}`}>
      <div className="card-image-wrap">
        <CatImage breed={breed} className="card-image" />
        <span className="card-number">0{index + 1}</span>
        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="card-copy">
        <div><h3>{breed.name}</h3><p>{breed.tagline}</p></div>
        <span className="card-origin">{breed.origin}</span>
      </div>
    </a>
  )
}
