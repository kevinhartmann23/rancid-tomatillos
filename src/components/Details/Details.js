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
      <div className='details-wrapper'>
        <h2 className='details-title'>{title}</h2>
        <p className='details-date'>Release Date: {release_date}</p>
        <p className='details-overview'>Overview: {overview}</p>
        <p className='details-genres'>Genres: {genreList}</p>
        <p className='details-budget'>Budget: {formattedBudget}</p>
        <p className='details-revenue'>Revenue: {formattedRevenue}</p>
        <p className='details-runtime'>Runtime: {runtime} minutes</p>
        <p className='details-rating'>Average Rating: {fixedRating}</p>
      </div>
      <div 
        className='details-image' 
        style={{ backgroundImage: `linear-gradient(to top, rgba(255,255,255,0), #FBF7EF), url(${backdrop_path})` }}
      >
      </div>
    </section>
  )
}
