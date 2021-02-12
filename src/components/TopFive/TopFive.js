import React from 'react'
import Card from '../Card/Card'
import './TopFive.css'

export default function TopFive({ movies, handleClick }) {
  const allMovies = movies.map(movie => movie)

  allMovies.sort((a, b) => {
    if (a.average_rating < b.average_rating) {
      return 1
    } else {
      return -1
    }
  })

  const topFive = allMovies.slice(1, 6)
  const topFiveCards = topFive.map(movie => {
    return (
      <Card
        className='topfive-card'
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
    <section className='topfive-container'>
      <h2 className='section-header'>Top Five Picks</h2>
      <div className='topfive'>
        {topFiveCards}
      </div>
    </section>
  )
}
