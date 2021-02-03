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

// {
//  "id": 337401,
//   "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
//    "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
//     "title": "Mulan",
//      "average_rating": 4.909090909090909,
//       "release_date": "2020-09-04"
// },