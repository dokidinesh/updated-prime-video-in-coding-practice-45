// Write your code here
import MovieSlider from '../MoviesSlider'

import {
  MoviesHeading,
  PrimeVideoContainer,
  MoviesContainer,
  Image,
} from './styledComponents'

const comedyCategory = 'COMEDY'

const actionCategory = 'ACTION'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyCategory,
  )

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionCategory,
  )

  return (
    <PrimeVideoContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <MoviesHeading>Action Movies</MoviesHeading>
        <MovieSlider moviesList={actionMovies} />
        <MoviesHeading>Comedy Movies</MoviesHeading>
        <MovieSlider moviesList={comedyMovies} />
      </MoviesContainer>
    </PrimeVideoContainer>
  )
}

export default PrimeVideo
