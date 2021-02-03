import React from 'react'
import Movies from '../Movies/Movies'
import movieData from '../../data/movie-data'
import greenTomato from '../../images/icon-tomato-green.png'
import './App.css'

function App() {
  return (
    <div className='App'>
      <img src={greenTomato} />
      <h1>RANCID TOMATILLOS</h1>
      <Movies movies={movieData.movies} />
    </div>
  )
}

export default App
