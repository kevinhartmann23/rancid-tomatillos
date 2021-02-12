import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

export default function Movies({ movies }) {
  const movieCollection = movies.map(movie => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
      />
    )
  })

    return (
      <section className='movie-container'>
        <h2 className='section-header'>All Movies</h2>
        <div className='movies'>
          {movieCollection}
        </div>
      </section>
    )
}
