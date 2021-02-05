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

export default function Details({currentMovie, handleClick}) {
  const { title, release_date, overview, genres, budget, revenue, runtime, average_rating } = currentMovie
  const fixedRating = average_rating.toFixed(1)
  const genreList = genres.join(', ')
  const formattedBudget = formatCurrency(budget)
  const formattedRevenue = formatCurrency(revenue)
  
  return (
    <section className='details'>
      <button id='button-back' onClick={handleClick}>Back</button>
      <h2>{title}</h2>
      <p>Release Date: {release_date}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genreList}</p>
      <p>Budget: {formattedBudget}</p>
      <p>Revenue: {formattedRevenue}</p>
      <p>Runtime: {runtime} minutes</p>
      <p>Average Rating: {fixedRating}</p>
    </section>
  )
}

// "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
