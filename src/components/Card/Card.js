import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import greenTomato from '../../images/icon-tomato-green.png'
import redTomato from '../../images/icon-tomato-red.png'

function Card({ id, poster, title, rating, handleClick }) {
  const fixedRating = rating.toFixed(1)
  let tomatoIcon = greenTomato

  if (fixedRating < 5) {
    tomatoIcon = redTomato
  }

 return (
  <article className='movie' id={id} onClick={handleClick}>
   <img className='movie-poster' src={poster} alt={`${title} poster`} />
   <h1 className='movie-title'>{title}</h1>
   <div className='rating-container'>
     <p className='movie-rating'>{`Rating: ${fixedRating}`}</p>
     <img className='movie-tomato' src={tomatoIcon} alt='tomato icon'/>
   </div>
   <Link to={`/movies/${id}`}></Link>
  </article>
 )
}

export default Card
