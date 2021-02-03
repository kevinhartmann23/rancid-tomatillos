import React from 'react'
import './Card.css'

function Card({ id, poster, title, rating }) {
 return (
  <article className='movie' id={id}>
   <img src={poster} alt={`${title} poster`} />
   <h1>{title}</h1>
   <p>{rating}</p>
  </article>
 )
}

export default Card