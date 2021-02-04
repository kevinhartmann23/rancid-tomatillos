import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Details from '../Details/Details'
import movieData from '../../data/movie-data'
import greenTomato from '../../images/icon-tomato-green.png'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: 'all' //movie
    }
  }

  handleClick(id) {

  }

  render() {
    let display

    if (this.state.display === 'movie') {
      display = (
        <Details />
      )
    } else {
      display = (
        <Movies movies={movieData.movies} handleClick={this.handleClick}/>
      )
    }

    return (
      <div className='App'>
        <header className='header'>
          <img className='header-icon' src={greenTomato} />
          <h1>RANCID TOMATILLOS</h1>
        </header>
        {display}
      </div>
    )
  }
}

export default App
