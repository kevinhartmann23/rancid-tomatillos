import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

function Movies({ movies, handleClick }) {
  const movieCollection = movies.map(movie => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        handleClick={handleClick}
      />
    )
  })

    return (
      <section className='movie-container'>
        {movieCollection}
      </section>
    )
}

export default Movies
