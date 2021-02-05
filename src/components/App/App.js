import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Details from '../Details/Details'
import greenTomato from '../../images/icon-tomato-green.png'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: 'all',
      movies: [],
      currentMovie: '',
    }
  }

  handleClick = (event) => {
    if (event.target.id === 'button-back') {
      this.setState({ display: 'all' })

    } else {
      const movieId = event.target.closest('article').id
      const currentMovie = this.fetchData(`movies/${movieId}`)
      Promise.all([currentMovie])
        .then(response => {
          this.setState({ display: 'movie', currentMovie: response[0].movie })
        })
    }
  }

  fetchData(input) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${input}`)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  componentDidMount = () => {
    const fetchData = this.fetchData('movies')
    Promise.all([fetchData])
      .then(response => {
        this.setState({ movies: response[0].movies })
      })
  }

  render() {
    let display

    if (this.state.display === 'movie') {
      display = (
        <Details currentMovie={this.state.currentMovie} handleClick={this.handleClick}/>
      )
    } else {
      display = (
        <Movies movies={this.state.movies} handleClick={this.handleClick}/>
      )
    }

    return (
      <div className='App'>
        <header className='header'>
          <img className='header-icon' src={greenTomato} alt='tomatillo logo' />
          <h1>RANCID TOMATILLOS</h1>
        </header>
        {display}
      </div>
    )
  }
}

export default App
