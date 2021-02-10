import React from 'react'
import './Details.css'

function formatCurrency(amount) {
  if(amount === 0){
    return 'Not Reported'
  }

  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'USD'
  })
}

export default function Details({currentMovie}) {
  const { title, release_date, backdrop_path, overview, genres, budget, revenue, runtime, average_rating } = currentMovie
  const fixedRating = average_rating.toFixed(1)
  const genreList = genres.join(', ')
  const formattedBudget = formatCurrency(budget)
  const formattedRevenue = formatCurrency(revenue)

  return (
    <section className='details'>
      <h2>{title}</h2>
      <p>Release Date: {release_date}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genreList}</p>
      <p>Budget: {formattedBudget}</p>
      <p>Revenue: {formattedRevenue}</p>
      <p>Runtime: {runtime} minutes</p>
      <p>Average Rating: {fixedRating}</p>
      <div className='details-poster'>
        <img className='poster' src={backdrop_path} alt={title} />
      </div>
    </section>
  )
}
