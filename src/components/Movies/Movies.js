import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

function Movies({movies}){
 const movieCollection = movies.map(movie => {
  return <Card />
 })
 return (
  <>
   {movieCollection}
  </>
 )
}

export default Movies