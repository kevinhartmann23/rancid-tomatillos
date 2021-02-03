import React from 'react'
import './Card.css'

function Card({ id, poster, title, rating }) {
 return (
  <article className='movie' id={id}>
   <img className='movie-poster' src={poster} alt={`${title} poster`} />
   <h1 className='movie-title'>{title}</h1>
   <p className='movie-rating'>{[rating.toFixed(1)]}</p>
  </article>
 )
}

export default Card