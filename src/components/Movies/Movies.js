import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

function Movies({movies}) {
  const movieCollection = movies.map(movie => {
    return (
     <Card
      id={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      rating={movie.average_rating}
     />
    )
  })

    return (
      <section className='movie-container'>
        {movieCollection}
      </section>
    )
}

export default Movies

// {
//  "id": 337401,
//   "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
//    "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
//     "title": "Mulan",
//      "average_rating": 4.909090909090909,
//       "release_date": "2020-09-04"
// },
