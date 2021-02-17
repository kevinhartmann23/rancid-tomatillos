import React from 'react'
import Parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import './Card.css'
import greenTomato from '../../images/icon-tomato-green.png'
import redTomato from '../../images/icon-tomato-red.png'


function Card({ id, poster, title, rating, handleClick }) {
  const fixedRating = rating.toFixed(0)
  let tomatoIcon = greenTomato

  if (fixedRating < 5) {
    tomatoIcon = redTomato
  }
  const imageTomato = `<img class='movie-tomato' src=${tomatoIcon} alt='tomato icon' />`

  const tomatoDisplay = new Array(parseInt(fixedRating))
  tomatoDisplay.fill(imageTomato)

  return (
    <Link to={`/movies/${id}`}>
      <article className='movie' id={id} onClick={handleClick}>
        <img className='movie-poster' src={poster} alt={`${title} poster`} />
        <div className='rating-container' role='img' aria-label={`Rating ${tomatoDisplay.length} out of ten`} >
          {Parse(tomatoDisplay.join(''))}
          <p className='rating-text'>/10</p>
        </div>
      </article>
    </Link>
  )
}

export default Card
