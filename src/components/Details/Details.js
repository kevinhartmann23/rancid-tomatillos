import React from 'react'
import './Details.css'

export default function Details({handleClick}) {
  return (
    <section className='details'>
      <button id='button-back' onClick={handleClick}>Back</button>
      <h2>Money Plane</h2>
      <p>Release Date: 2020-09-29</p>
      <p>Overview: A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.</p>
      <p>Genres: Action</p>
      <p>Budget: $0</p>
      <p>Revenue: $0</p>
      <p>Runtime: 82 minutes</p>
      <p>Tagline: </p>
      <p>Average Rating: 6.1</p>
    </section>
  )
}

// "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
